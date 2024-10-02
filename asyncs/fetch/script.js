const rolBtn = document.querySelector("#rol-selector li");
const rolSelector = document.querySelector("#rol-selector");
const usersTable = document.querySelector(".table-users");
const loading = document.querySelector(".loading");

let globalUser = [];

document.addEventListener("DOMContentLoaded", function () {
  fetch("https://643ecf8ec72fda4a0b01bc66.mockapi.io/api/v1/users")
    .then((response) => response.json())
    .then((data) => {
      globalUser = data;
      getRoles(data);
      getAllTable(data);
    })
    .finally((loading.style.display = "none"))
    .catch((error) => console.log(error));
});

function getRoles(data) {
  let roles = [];
  data.forEach((user) => {
    user.roles.forEach((rol) => {
      if (!roles.includes(rol)) {
        roles.push(rol);
      }
    });
  });
  setRoles(roles);
}

function setTableValues(user) {
  let divId = document.createElement("div");
  let divName = document.createElement("div");
  let divMail = document.createElement("div");
  divId.innerHTML = `<span> ${user.id} </span>`;
  divName.innerHTML = `<span> ${user.name} </span>`;
  divMail.innerHTML = `<span> ${user.email} </span>`;
  usersTable.append(divId);
  usersTable.append(divName);
  usersTable.append(divMail);
}

function getAllTable(data) {
  usersTable.innerHTML = "";
  data.forEach((user) => {
    setTableValues(user);
  });
}

function setRoles(roles) {
  roles.forEach((rol) => {
    let li = document.createElement("li");
    li.textContent = rol;
    li.addEventListener("click", function () {
      filterTable(li.textContent);
    });
    rolSelector.append(li);
  });
}

function filterTable(filter) {
  usersTable.innerHTML = "";
  globalUser.forEach((user) => {
    if (user.roles.includes(filter)) {
      setTableValues(user);
    }
  });
}

rolBtn.addEventListener("click", function () {
  getAllTable(globalUser);
});
