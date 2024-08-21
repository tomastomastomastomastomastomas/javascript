let firstAddButton = document.getElementById("first-add-button");
let secondAddButton = document.getElementById("second-add-button");

let firstInput = document.getElementById("first-input");
let secondInput = document.getElementById("second-input");

let firstList = document.getElementById("first-list");
let secondList = document.getElementById("second-list");

let deleteButton = document.getElementById("delete-button");

let toggleButton = document.getElementById("toggle-button");

let body = document.querySelector("body");

let initialItems1 = ["Buy eggs", "Do laundry", "Buy facturas for Seba"];
let initialItems2 = ["Sleep ", "Eat", "Code", "Repeat"];

initialItems1.forEach(function (item) {
  let newItem = document.createElement("li");
  newItem.textContent = item;
  firstList.append(newItem);
});

initialItems2.forEach(function (item) {
  let newItem = document.createElement("li");
  newItem.textContent = item;
  secondList.append(newItem);
});

let items = document.querySelectorAll("li");
addDeleteButton();

firstAddButton.addEventListener("click", function () {
  let newItem = document.createElement("li");
  newItem.textContent = firstInput.value;
  firstList.append(newItem);
  items = document.querySelectorAll("li");
  addDeleteButton();
});

items.forEach(function (item) {
  item.addEventListener("mouseleave", function () {
    deleteButton.style.display = "None";
  });
});

toggleButton.addEventListener("click", function () {
  body.classList.toggle("dark");
});

deleteButton.addEventListener("click", function () {
  let ask = confirm("Are you sure?");
  if (ask) {
    deleteButton.parentNode.remove();
  }
});

function addDeleteButton() {
  items.forEach(function (item) {
    console.log(item.textContent);
    item.addEventListener("mouseover", function () {
      deleteButton.style.display = "block";
      item.append(deleteButton);
    });
  });
}
