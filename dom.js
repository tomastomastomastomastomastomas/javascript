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
