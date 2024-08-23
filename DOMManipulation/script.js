let toggleButton = document.getElementById("toggle-button");

let body = document.querySelector("body");

let listContainer = document.getElementById("lists-container");

let items = [
  ["Buy eggs", "Do laundry", "Buy facturas for Seba"],
  ["Sleep ", "Eat", "Code", "Repeat"],
  ["Buy eggs", "Do laundry", "Buy facturas for Seba"],
  ["Sleep ", "Eat", "Code", "Repeat"],
  ["hola"],
  ["Buy eggs", "Do laundry", "Buy facturas for Seba"],
  ["Sleep ", "Eat", "Code", "Repeat"],
  ["Buy eggs", "Do laundry", "Buy facturas for Seba"],
  ["Sleep ", "Eat", "Code", "Repeat"],
  ["hola"],
];

if (
  localStorage.getItem("preference") &&
  localStorage.getItem("preference") === "dark"
) {
  console.log("Existe preferencia");
  body.classList.add("dark");
} else {
  if (
    window.matchMedia &&
    window.matchMedia("(prefers-color-scheme: dark)").matches
  ) {
    localStorage.setItem("preference", "dark");
    body.classList.add("dark");
  }
}

items.forEach(function (_, index) {
  let div = document.createElement("div");
  div.classList.add("list-container");

  let span = document.createElement("span");
  span.textContent = index + 1 + "º LIST";
  div.append(span);

  let ul = document.createElement("ul");
  ul.classList.add("list");
  div.append(ul);

  let input = document.createElement("input");
  input.classList.add("input");
  input.placeholder = "To do";
  div.append(input);

  let addButton = document.createElement("button");
  addButton.classList.add("add-button");
  addButton.textContent = "Add";
  div.append(addButton);

  let deleteButton = document.createElement("button");
  deleteButton.classList.add("delete-button");
  div.append(deleteButton);

  let deleteIcon = document.createElement("i");
  deleteIcon.classList.add("fa-solid");
  deleteIcon.classList.add("fa-circle-xmark");
  deleteButton.append(deleteIcon);

  listContainer.append(div);
});

let createButton = document.querySelectorAll(".add-button");

let input = document.querySelectorAll(".input");

let lists = document.querySelectorAll(".list");

let deleteButton = document.querySelectorAll(".delete-button");

lists.forEach(function (list, index) {
  addItems(list, items[index]);
  addDeleteButton(list, deleteButton[index]);
  hideDeleteButton(list, deleteButton[index]);
  deleteButtons(list, index, deleteButton[index]);
  createItem(
    list,
    index,
    createButton[index],
    input[index],
    deleteButton[index]
  );
});
function addItems(ul, items) {
  items.forEach(function (item) {
    let newItem = document.createElement("li");
    newItem.textContent = item;
    ul.append(newItem);
  });
}
function createItem(ul, index, createButton, input, deleteButton) {
  createButton.addEventListener("click", function () {
    if (input.value.trim() !== "") {
      let newItem = document.createElement("li");
      newItem.textContent = input.value;
      items[index].push(input.value);
      input.value = "";
      ul.append(newItem);
      addDeleteButton(ul, deleteButton);
      hideDeleteButton(ul, deleteButton);
    }
  });
}
function hideDeleteButton(ul, deleteButton) {
  ul.childNodes.forEach(function (item) {
    item.addEventListener("mouseleave", function () {
      deleteButton.classList.remove("visible");
    });
  });
}

function deleteButtons(ul, index, deleteButton) {
  deleteButton.addEventListener("click", function () {
    addAlert(ul, index, deleteButton);
  });
}
function deleteItem(ul, index, deleteButton) {
  items[index] = items[index].filter(function (item, i) {
    console.log(deleteButton.parentNode.parentNode);
    return (
      i !==
      [...deleteButton.parentNode.parentNode.children].indexOf(
        deleteButton.parentNode
      )
    );
  });
  for (let index = ul.childNodes.length - 1; index >= 0; index--) {
    ul.childNodes[index].remove();
  }
  items[index].forEach(function (item) {
    newLi = document.createElement("li");
    newLi.textContent = item;
    ul.append(newLi);
  });
  addDeleteButton(ul, deleteButton);
  hideDeleteButton(ul, deleteButton);
}

function addDeleteButton(ul, deleteButton) {
  ul.childNodes.forEach(function (item) {
    item.addEventListener("mouseover", function () {
      deleteButton.style.display = "flex";
      item.append(deleteButton);
      deleteButton.classList.add("visible");
    });
  });
}
toggleButton.addEventListener("click", function () {
  body.classList.toggle("dark");
});

function addAlert(ul, index, deleteButton) {
  let alert = document.querySelector(".alert");
  let confirm = document.querySelector(".confirm");
  let cancel = document.querySelector(".cancel");
  alert.style.display = "flex";
  cancel.addEventListener("click", function () {
    alert.style.display = "none";
  });
  confirm.addEventListener("click", function () {
    deleteItem(ul, index, deleteButton);
    alert.style.display = "none";
  });
}
