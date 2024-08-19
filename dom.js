let elementIntro = document.querySelector(".intro");
elementIntro.classList.add("highlight");

document.getElementById("header-title").innerText = "Nuevo titulo";

let elementsLi = document.querySelectorAll("li");
elementsLi.forEach(function (elementLi) {
  console.log(elementLi);
});

document.querySelector("div").classList.remove("clase");

document.querySelector(".main-title").innerText = "Bienvenidos";

let footer = document.getElementById("footer");
footer.style.background = "red";

document.querySelector("div.content").innerText = "Contenido adicional";

let header = document.querySelector(".header");
if (header.classList.contains("sticky")) {
  console.log(header);
}

let miUl1 = document.querySelector("ul.create1");
let miUl2 = document.querySelector("ul.create2");
let datos1 = ["hola1", "hola2", "hola3"];
let datos2 = ["chau1", "chau2", "chau3"];

datos1.forEach(function (dato) {
  let create = document.createElement("li");
  create.textContent = dato;
  miUl1.append(create);
});

datos2.forEach(function (dato) {
  let create = document.createElement("li");
  create.textContent = dato;
  miUl2.append(create);
});
