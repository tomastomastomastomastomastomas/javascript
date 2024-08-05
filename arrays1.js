// Declara un array llamado pelisFavoritas con tres elementos y muéstralo en la consola.
let pelisFavoritas = ["Batman", "Spiderman", "Spiderman 2"];
console.log(pelisFavoritas);
//Accede y muestra en la consola el segundo elemento del array pelisFavoritas.
console.log(pelisFavoritas[1]);
//Declara un array vacío llamado libros y agrega tres elementos.
let libros = [];
libros.push("libro1");
libros.push("libro2");
libros.push("libro3");
//Elimina el último elemento del array libros y muéstralo en la consola.
console.log(libros.pop());
//Declara un array llamado colores con cuatro elementos y muestra su longitud en la consola.
let colores = ["rojo", "amarillo", "verde", "azul"];
console.log(colores.length);
//Del array de colores usando anteriormente, agrega 2 elementos al inicio del mismo y muéstralo en la consola.
colores.unshift("celeste", "naranja");
console.log(colores);
//Elimina el primer elemento del array colores y muéstralo en la consola.¿
console.log(colores.shift());
//Declara un array llamado frutas con tres elementos y verifica si contiene 'Manzana'. Muestra el resultado en la consola.
let frutas = ["Manzana", "Banana", "Naranja"];
console.log(frutas.includes("Manzana"));
//Declara un array de numeros del 1 al 15 y encuentra el primer número mayor que 3 en el array numeros.
let numeros1 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15];
console.log(
  numeros1.find(function (numero) {
    return numero > 3;
  })
);
//Ecuentra todos los números menores que 4 en el array numeros.
console.log(
  numeros1.filter(function (numero) {
    return numero < 4;
  })
);
//Declara una función llamada agregarElemento que acepte un array y un elemento como parámetros, agregue el elemento al final del array y devuelva la nueva longitud del array.
let array = [1, 2, 3, 4, 5];
function agregarElemento(array, elemento) {
  return array.push(elemento);
}
console.log(agregarElemento(array, 6));
//Declara una función llamada eliminarPrimerElemento que acepte un array como parámetro, elimine el primer elemento del array y devuelva el elemento eliminado.
function eliminarPrimerElemento(array) {
  return array.shift();
}
console.log(eliminarPrimerElemento(array));
//Declara una función llamada longitudArray que acepte un array como parámetro y devuelva la longitud del array mostrado en un mensaje como estee “La longitud de mi array es de [longitud]”.
function longitudArray(array) {
  return "La longitud del array es de " + array.length;
}
console.log(longitudArray(array));
//Declara una función llamada verificarElemento que acepte un array y un elemento como parámetros, y devuelva true si el elemento está en el array o false si no lo está.
function verificarElemento(array, elemento) {
  return array.includes(elemento);
}
console.log(verificarElemento(array, 3));
//Declara una función llamada encontrarElemento que acepte un array y un elemento como parámetros, y devuelva el primer elemento del array que sea igual al elemento dado. Si no se encuentra, devuelve undefined.
function encontrarElemento(array, elemento) {
  return array.find(function (element) {
    return element == elemento;
  });
}
console.log(encontrarElemento(array, 3));
//Declara una función llamada filtrarArray que acepte un array y un número como parámetros, y devuelva un nuevo array con todos los elementos mayores al número dado.
function filtrarArray(array, elemento) {
  return array.filter(function (element) {
    return element > elemento;
  });
}
console.log(filtrarArray(array, 3));
//Dado un array de números, verifica si todos son mayores que cero. Devuelve en consola el resultado
let numeros = [1, 2, 3, -2, -1, 10, 5, 11];
console.log(
  numeros.every(function (numero) {
    return numero > 0;
  })
);
//Validar que todos los strings son no vacíos
let strings = ["hola", "", "a"];
console.log(
  strings.every(function (string) {
    return string != "";
  })
);
//Comprueba si todos los elementos en un array de strings contienen algún carácter. Devuelve en consola el resultado
console.log(
  strings.every(function (string) {
    return string.length > 0;
  })
);
//Confirmar que todos los estudiantes pasaron el examen:
let notas = [3, 5, 7, 9];
console.log(
  notas.every(function (nota) {
    return nota > 6;
  })
);
//Comprueba si todos los estudiantes en un array tienen una calificación mayor o igual a 6. Devuelve en consola el resultado
console.log(
  notas.filter(function (nota) {
    return nota >= 6;
  })
);
//Verificar si todas las edades son de adultos:
let edades = [3, 5, 7, 9, 18, 20, 15];
console.log(
  edades.every(function (edad) {
    return edad >= 18;
  })
);
//Comprobar si todos los números son divisibles por 5:
console.log(
  numeros.every(function (numero) {
    return numero % 5 == 0;
  })
);
//Verificar si al menos un número en un array es mayor que 10.
console.log(
  numeros.some(function (numero) {
    return numero > 10;
  })
);
//Comprobar si al menos un string en un array está vacío.
console.log(
  strings.some(function (string) {
    return string == "";
  })
);
//Verificar si al menos un estudiante no pasó el examen (calificación menor a 6).
console.log(
  notas.some(function (nota) {
    return nota < 6;
  })
);
//Comprobar si al menos una edad en un array corresponde a un adolescente (13-17 años).
console.log(
  edades.some(function (edad) {
    return edad >= 13 && edad <= 17;
  })
);
//
let arrayGrande = [
  "uno",
  "dos",
  "tres",
  "cuatro",
  "cinco",
  "seis",
  "siete",
  "ocho",
  "nueve",
  "diez",
];
let [, dos, , , , seis, siete, , , diez] = arrayGrande;
console.log(dos + seis + siete + diez);
