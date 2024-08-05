let pelisFavoritas = ["Batman", "Spiderman", "Spiderman 2"];
console.log(pelisFavoritas);

console.log(pelisFavoritas[1]);

let libros = [];
libros.push("libro1");
libros.push("libro2");
libros.push("libro3");

console.log(libros.pop());

let colores = ["rojo", "amarillo", "verde", "azul"];
console.log(colores.length);

colores.unshift("celeste", "naranja");
console.log(colores);

console.log(colores.shift());

let frutas = ["Manzana", "Banana", "Naranja"];
console.log(frutas.includes("Manzana"));

let numeros1 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15];
console.log(
  numeros1.find(function (numero) {
    return numero > 3;
  })
);

console.log(
  numeros1.filter(function (numero) {
    return numero < 4;
  })
);

let array = [1, 2, 3, 4, 5];
function agregarElemento(array, elemento) {
  return array.push(elemento);
}
console.log(agregarElemento(array, 6));

function eliminarPrimerElemento(array) {
  return array.shift();
}
console.log(eliminarPrimerElemento(array));

function longitudArray(array) {
  return "La longitud del array es de " + array.length;
}
console.log(longitudArray(array));

function verificarElemento(array, elemento) {
  return array.includes(elemento);
}
console.log(verificarElemento(array, 3));

function encontrarElemento(array, elemento) {
  return array.find(function (element) {
    return element == elemento;
  });
}
console.log(encontrarElemento(array, 3));

function filtrarArray(array, elemento) {
  return array.filter(function (element) {
    return element > elemento;
  });
}
console.log(filtrarArray(array, 3));

let numeros = [1, 2, 3, -2, -1, 10, 5, 11];
console.log(
  numeros.every(function (numero) {
    return numero > 0;
  })
);

let strings = ["hola", "", "a"];
console.log(
  strings.every(function (string) {
    return string != "";
  })
);

console.log(
  strings.every(function (string) {
    return string.length > 0;
  })
);

let notas = [3, 5, 7, 9];
console.log(
  notas.every(function (nota) {
    return nota > 6;
  })
);

console.log(
  notas.filter(function (nota) {
    return nota >= 6;
  })
);

let edades = [3, 5, 7, 9, 18, 20, 15];
console.log(
  edades.every(function (edad) {
    return edad >= 18;
  })
);

console.log(
  numeros.every(function (numero) {
    return numero % 5 == 0;
  })
);

console.log(
  numeros.some(function (numero) {
    return numero > 10;
  })
);

console.log(
  strings.some(function (string) {
    return string == "";
  })
);

console.log(
  notas.some(function (nota) {
    return nota < 6;
  })
);

console.log(
  edades.some(function (edad) {
    return edad >= 13 && edad <= 17;
  })
);
