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
calificacion = [4.5, 4.5];
