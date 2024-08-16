function invertirMensajes(mensaje) {
  let mensajeNuevo = "";
  for (let i = mensaje.length - 1; i >= 0; i--) {
    mensajeNuevo += mensaje[i];
  }
  return mensajeNuevo;
}
let mensaje = "Che, ¿vamos a la cancha?";

function calcularPromedio(calificacion) {
  let cont = 0;
  let prom = 0;
  for (let i = 0; i < calificacion.length; i++) {
    if (
      !(
        typeof calificacion[i] != "number" ||
        calificacion[i] > 5 ||
        calificacion < 1
      )
    ) {
      cont++;
      prom += calificacion[i];
    }
  }
  parseInt(prom / cont + 0.5) == parseInt(prom / cont)
    ? (prom = parseInt(prom / cont))
    : parseInt(prom / cont) + 1 > 5
    ? (prom = parseInt(prom / cont))
    : (prom = parseInt(prom / cont) + 1);
  let estrellas = "";
  for (let i = 0; i < prom; i++) {
    estrellas += "*";
  }
  return estrellas;
}
calificacion = [5, 5];

function creatTabla(numero) {
  let tabla = [];
  for (let i = 1; i <= 10; i++) {
    tabla.push(numero * i);
  }
  return tabla;
}

let puntaje = [3, 5, 7, 2, 8];
function clashRoyal(puntaje) {
  let maximo = puntaje[0];
  for (let i = 0; i < puntaje.length; i++) {
    if (maximo < puntaje[i + 1]) {
      maximo = puntaje[i + 1];
    }
  }
  return maximo;
}
