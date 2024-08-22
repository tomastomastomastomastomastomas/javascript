let createButton = document.querySelectorAll(".add-button");
let secondAddButton = document.getElementById("second-add-button");

let input = document.querySelectorAll(".input");

let lists = document.querySelectorAll(".list");

let deleteButton = document.querySelectorAll(".delete-button");

let toggleButton = document.getElementById("toggle-button");

let body = document.querySelector("body");

let initialLists = [
  ["Buy eggs", "Do laundry", "Buy facturas for Seba"],
  ["Sleep ", "Eat", "Code", "Repeat"],
  ["Item 1", "Item 2"],
];
let listItems1 = ["Buy eggs", "Do laundry", "Buy facturas for Seba"];
let listItems2 = ["Sleep ", "Eat", "Code", "Repeat"];

let prefabLi = document.querySelector("li");

let items = document.querySelectorAll("li");

lists.forEach(function (list, index) {
  addItems(list, initialLists[index]);
  addDeleteButton(list, deleteButton[index]);
  hideDeleteButton(list, deleteButton[index]);
  deleteItem(list, initialLists[index], deleteButton[index]);
  createItem(list, initialLists[index], createButton[index], input[index]);
});

function addItems(ul, items) {
  items.forEach(function (item) {
    let newItem = document.createElement("li");
    newItem.textContent = item;
    ul.append(newItem);
  });
}
function createItem(ul, items, createButton, input, deleteButton) {
  createButton.addEventListener("click", function () {
    let newItem = document.createElement("li");
    newItem.textContent = input.value;
    items.push(input.value);
    ul.append(newItem);
    addDeleteButton(ul, deleteButton);
    hideDeleteButton(ul, deleteButton);
  });
}
function hideDeleteButton(ul, deleteButton) {
  ul.childNodes.forEach(function (item) {
    item.addEventListener("mouseleave", function () {
      deleteButton.style.display = "None";
    });
  });
}
function deleteItem(ul, items, deleteButton) {
  deleteButton.addEventListener("click", function () {
    let ask = confirm("Are you sure?");
    if (ask) {
      items = items.filter(function (item) {
        console.log(deleteButton.parentNode.textContent);
        return item.trim() !== deleteButton.parentNode.textContent.trim();
      });
      for (let index = ul.childNodes.length - 1; index >= 0; index--) {
        console.log(ul.childNodes[index]);
        ul.childNodes[index].remove();
      }
      items.forEach(function (item) {
        newLi = document.createElement("li");
        newLi.textContent = item;
        ul.append(newLi);
      });
      addDeleteButton(ul, deleteButton);
      hideDeleteButton(ul, deleteButton);
    }
  });
}
function addDeleteButton(ul, deleteButton) {
  ul.childNodes.forEach(function (item) {
    item.addEventListener("mouseover", function () {
      deleteButton.style.display = "flex";
      item.append(deleteButton);
    });
  });
}
toggleButton.addEventListener("click", function () {
  body.classList.toggle("dark");
});
