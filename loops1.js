function calcularPromedio(calificaciones) {
  let i = 0;
  let promedio = 0;
  while (i < calificaciones.length) {
    promedio += calificaciones[i];
    i++;
  }
  return promedio / calificaciones.length;
}
let calificaciones = [1, 10, 5, 6, 4];

function verificarUsuario(nombres, nombre) {
  let encontrado = false;
  let i = 0;
  while (i < nombres.length) {
    if (nombres[i] == nombre) {
      encontrado = true;
    }
    i++;
  }
  return encontrado ? "Usuario encontrado" : "Usuario no encontrado";
}
let usuarios = ["juan", "maria", "admin", "carlos"];
let usuarioBuscado = "admin";

function verificarContraseñas(contraseñas) {
  let cont = 0;
  let i = 0;
  while (i < contraseñas.length) {
    if (contraseñas[i].length >= 8) {
      cont++;
    }
    i++;
  }
  return cont;
}
let contraseñas = ["password", "1234567", "supersecret", "contraseña123"];

function verificarCorreos(correos) {
  let i = 0;
  let correosAprobados = 0;
  while (i < correos.length) {
    if (correos[i].includes("@") && correos[i].includes(".")) {
      correosAprobados++;
    }
    i++;
  }
  return correosAprobados == correos.length;
}
let correos = [
  "correo1@example.com",
  "correo2@examplecom",
  "correo3@example.com",
];

function esPrimo(numero) {
  let i = 2;
  let esPrimo = true;
  if (numero <= 0 || !Number.isInteger(numero)) {
    return false;
  }
  do {
    if (numero % i == 0 && i != numero && i != 1) {
      esPrimo = false;
    }
    i++;
  } while (i == numero);
  return esPrimo;
}

function contarComentarios(comentarios) {
  let i = 0;
  while (i < comentarios.length) {
    i++;
  }
  return i;
}
