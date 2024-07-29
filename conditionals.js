//Crea un bloque de código que compare dos variables numéricas. Si el número A es mayor que el número B, imprimir en consola ‘El número A es mayor a B‘
let n1 = 3
let n2 = 2
if (n1 > n2){
    console.log("El número A es mayor a B")
}
//Crea un bloque de código que tome la edad de un usuario y la compare con un número de referencia. Si la edad es mayor al número de referencia, imprimir en consola un mensaje.
let n25 = 10
let n26 = 18
if (n25 >= n26){
    console.log("Es mayor de edad")
}
//Crea un bloque de código que compare dos números e imprima en consola un valor booleano.
let n3 = 1
let n4 = 5
if (n3 < n4){
    console.log(true)
}
//Crea un bloque de código que compare dos nombres, y si ambos son iguales imprima en consola el nombre.
let s1 = "hola"
let s2 = "hola"
if (s1 === s2){
    console.log(s1)
}
//Crea un bloque de código que compare dos nombres, y si ambos son diferentes imprima en consola un mensaje.
let s3 = "hola"
let s4 = "chau"
if (s3 != s4){
    console.log(s3)
}
//Crea un bloque de código que imprima en consola un número en caso de que sea un número negativo.
let n5 = -4
if (n5 < 0){
    console.log(n5)
}
//Crea un bloque de código que imprima en consola un número en caso de que NO sea un número negativo.
let n6 = -4
if (n6 > 0){
    console.log(n6)
}

//Crea un bloque de código que compare dos números. Si el número es par, imprimir en consola ‘El número es par’. De lo contrario, imprimir ‘El número es impar’.
let n7 = 3
if (n7 % 2 === 0){
    console.log("Es par")
}
else{
    console.log("Es impar")
}
//Crea un bloque de código que compare dos números y luego imprima en consola si es positivo o negativo.
let n8 = -2
if (n8 > 0){
    console.log("Es positivo")
}
else{
    console.log("Es negativo")
}
//Crea una función que tome de referencia una variable string cuyo valor sea una letra, y luego imprima en consola si es una vocal o una consonante.
let s9 = "z"
function f1(s){
    if (s.toLowerCase() === "a" || s === "e" || s.toLowerCase() === "i" || s.toLowerCase() === "o" || s.toLowerCase() === "u"){
        console.log("Es vocal")
    }
    else{
        console.log("Es consonante")
    }
}
f1(s9)
//Crea un bloque de código que tome de referencia un nombre. Si el nombre ingresado es ‘Pedro’ imprimir en consola ‘Hola Pedro, como estás?’. De lo contrario, imprimir ‘Hola! Cómo te llamas?’.
let s5 = "Pedro"
if (s5 === "Pedro"){
    console.log("Hola Pedro, como estas?")
}
else{
    console.log("Como te llamas?")
}
//Crea un bloque de código que tome de referencia la nota de un examen y devuelva ‘Estás aprobado’ si la nota es mayor o igual a 7, o ‘Estás desaprobado’ si la nota es menor a 7.
nota = 6
if (nota >= 7){
    console.log("Estas aprobado")
}
else{
    console.log("Estas desaprobado")
}

//Crea un bloque de código que tome de referencia un número e imprima en pantalla si el número es menor a 10, mayor a 50, o si está entre esos dos valores.
let n9 = 30
if (n9 < 10)
    console.log("Es menor a 10")
else if (n9 > 50){
    console.log("Es mayor a 50")
}
else{
    console.log("Esta entre 10 y 50")
}
//Crea un bloque de código que compare dos números. Si ambos números son menores a 10, imprimir en consola el múltiplo. Si ambos números son mayores a 50,  imprimir en consola su suma. Sino, imprimir en consola el primer número menos el segundo.
let n10 = 10
let n11 = 15
if (n10 < 10 && n11 < 10){
    console.log(n10 * n11)
}
else if(n10 > 50 && n11 > 50){
    console.log(n10 + n11)
}
else{
    console.log(n10 - n11)
}
//Crea un bloque de código que tome de referencia un número del 1 al 7 y devuelva el día de la semana correspondiente. Por ejemplo: 1 = ‘lunes’.
let n12 = 6
if (n12 === 1)
{
    console.log("Lunes")
}
else if (n12 === 2){
    console.log("Martes")
}
else if (n12 === 3){
    console.log("Miercoles")
}
else if (n12 === 4){
    console.log("Jueves")
}
else if (n12 === 5){
    console.log("Viernes")
}
else if (n12 === 6){
    console.log("Sabado")
}
else if (n12 === 7){
    console.log("Domingo")
}
//Crea un bloque de código que reciba un número e imprima en pantalla si es divisible por 2, 3, o ninguno.
let n13 = 1
if (n13 % 2 === 0)
{
    console.log("Es divisible por 2")
}
else if (n13 % 3 === 0){
    console.log("Es divisible por 3")
}
else{
    console.log("No es divisible")
}
//Crea un bloque de código que tome de referencia un número del 1 al 12 y devuelva el mes correspondiente. Por ejemplo: 1 = ‘Enero’.
let n14 = 6
if (n14 === 1)
{
    console.log("Enero")
}
else if (n14 === 2){
    console.log("Febrero")
}
else if (n14 === 3){
    console.log("Marzo")
}
else if (n14 === 4){
    console.log("Abril")
}
else if (n14 === 5){
    console.log("Mayo")
}
else if (n14 === 6){
    console.log("Junio")
}
else if (n14 === 7){
    console.log("Julio")
}
else if (n14 === 8){
    console.log("Agosto")
}
else if (n14 === 9){
    console.log("Septiembre")
}
else if (n14 === 10){
    console.log("Octubre")
}
else if (n14 === 11){
    console.log("Noviembre")
}
else if (n14 === 12){
    console.log("Diciembre")
}

//Crea un bloque de código que tome de referencia un número del 1 al 7. Utiliza una sentencia Switch para imprimir en consola el día de la semana correspondiente.
let n15 = 4
switch(n15){
    case 1:
        console.log("Lunes");
        break;
    case 2:
       console.log("Martes");
       break;
    case 3:
        console.log("Miercoles");
        break;
    case 4:
        console.log("Jueves");
        break;
    case 5:
        console.log("Viernes");
        break;
    case 6:
        console.log("Sabado");
        break;
    case 7:
        console.log("Domingo");
        break;
}
//Crea un bloque de código que tome de referencia una letra correspondiente al género (‘H’, ‘M’, ‘X’…). Utiliza una sentencia switch para imprimir en consola el género correspondiente.
let s6 = "M"
switch(s6){
    case "X":
        console.log("No binario?");
        break;
    case "H":
       console.log("Hombre");
       break;
    case "M":
        console.log("Mujer");
        break;
}
//
let n28 = 4
switch(n15){
    case 1:
        console.log("Uno");
        break;
    case 2:
       console.log("Dos");
       break;
    case 3:
        console.log("Tres");
        break;
    case 4:
        console.log("Mayor a 3");
        break;
    case 5:
        console.log("Mayor a 3");
        break;
    case 6:
        console.log("Mayor a 3");
        break;
    case 7:
        console.log("Mayor a 3");
        break;
    case 8:
        console.log("Mayor a 3");
        break;
    case 9:
        console.log("Mayor a 3");
        break;
    case 10:
        console.log("Mayor a 3");
        break;
}
//Crea un bloque de código que tome de referencia una letra. Utiliza switch para imprimir en consola si es una vocal, una consonante, o un caracter especial.
let s10 = "¡"
switch (s10){
    case "a":
        console.log("Es vocal")
        break
    case "e":
        console.log("Es vocal")
        break
    case "i":
        console.log("Es vocal")
        break
    case "o":
        console.log("Es vocal")
        break
    case "u":
        console.log("Es vocal")
        break

    case "b":
        console.log("Es consonante")
        break
    case "c":
        console.log("Es consonante")
        break
    case "d":
        console.log("Es consonante")
        break
    case "f":
        console.log("Es consonante")
        break
    case "g":
        console.log("Es consonante")
        break
    case "h":
        console.log("Es consonante")
        break
    case "j":
        console.log("Es consonante")
        break
    case "k":
        console.log("Es consonante")
        break
    case "l":
        console.log("Es consonante")
        break
    case "m":
        console.log("Es consonante")
        break
    case "n":
        console.log("Es consonante")
        break
    case "ñ":
        console.log("Es consonante")
        break
    case "p":
        console.log("Es consonante")
        break
    case "q":
        console.log("Es consonante")
        break
    case "r":
        console.log("Es consonante")
        break
    case "s":
        console.log("Es consonante")
        break
    case "t":
        console.log("Es consonante")
        break
    case "v":
        console.log("Es consonante")
        break
    case "w":
        console.log("Es consonante")
        break
    case "x":
        console.log("Es consonante")
        break
    case "y":
        console.log("Es consonante")
        break
    case "z":
        console.log("Es consonante")
        break
    default:
        console.log("Es un caracter especial")
}
//Crea un bloque de código que tome de referencia un número del 1 al 4. Utiliza switch para imprimir en consola la estación del año correspondiente.
let n27 = 2
switch(n27){
    case 1:
        console.log("Verano")
        break
    case 2:
        console.log("Otoño")
        break
    case 3:
        console.log("Invierno")
        break
    case 4:
        console.log("Primavera")
        break
}
//Crea un bloque de código que tome de referencia una variable ‘edad’. Utiliza el operador ternario para imprimir en consola si es o no mayor de edad.
let edad = 17
console.log(edad >= 18 ? "Es mayor de edad" : "Es menor de edad")
//Crea un bloque de código que tome de referencia un número. Utiliza el operador ternario para determinar si es par o impar y muestra el resultado en consola.
let n16 = 3
console.log(n16 % 2 === 0 ? "Es par" : "Es impar")
//Crea un bloque de código que tome de referencia dos números y utilice el operador ternario para determinar cual de los dos es el mayor. Luego imprime en consola el resultado.
let n17 = 1
let n18 = 2
console.log(n17 > n18 ? n17 : n18)
//Crea un bloque de código que tome de referencia un número del 1 al 7 y utilice el operador ternario para imprimir en consola el día de la semana correspondiente.
let n19 = 5
console.log(n19 === 1 ? "Es lunes" : n19 === 2 ? "Es martes" : n19 === 3 ? "Es miercoles" : n19 === 4 ? "Es jueves" : n19 === 5 ? "Es viernes" : n19 === 6 ? "Es sabado" : n19 === 7 ? "Es domingo" : "No coincide")
//Crea un bloque de código que tome de referencia un número. Utiliza el operador ternario para determinar si es positivo, negativo o cero e imprime el resultado en consola.
let n20 = 2
console.log(n20 < 0 ? "Es negativo" : n20 > 0 ? "Es positivo" : "Es cero")
//Crea un bloque de código que tome de referencia un número del 1 al 100 y utilice el operador ternario para determinar si es múltiplo de 3 y 5 para imprimir el resultado en consola.
let n21 = 3
console.log(n21 >= 1 && n21 <= 100 ? n21 % 3 === 0 ? "Es divisible por 3" : n21 % 5 === 0 ? "Es divisble por 5" : "No es divisible" : "No es un numero valido")

//Crea un bloque de código que tome de referencia un número del 1 al 100 y, utilizando el tipo de condicional que prefieras, imprimir si es múltiplo de 2, 3 o 5 incluyendo las diferentes combinaciones posibles.
let n22 = 10
let s7 = "No es divisble por ninguno"
if (n22 >= 1 && n22 <= 100){
    if (n22 % 2 === 0 || n22 % 3 === 0 || n22 % 5 === 0){
        s7 = "El numero " + n22 + " es divisible por"
        if (n22 % 2 === 0){
            s7 += " - 2"
        }
        if (n22 % 3 === 0){
            s7 += " - 3"
        }
        if (n22 % 5 === 0){
            s7 += " - 5"
        }
    }
}
else{
    s7 = "No es un numero valido"
}
console.log(s7)
//Crea un bloque de código que reciba un numero del 1 al 1000. Utiliza el tipo de condicional que prefieras para imprimir en consola si el numero es par o impar, si es divisible por 2, por 3 o por 5, y si es mayor o menor a 50.
let n23 = 90
let s8 = "El numero " + n23
if (n23 >= 1 && n23 <= 1000){
    if (n23 % 2 === 0 || n23 % 3 === 0 || n23 % 5 === 0){
        s8 += " es divisible por"
        if (n23 % 2 === 0){
            s8 += " - 2"
        }
        if (n23 % 3 === 0){
            s8 += " - 3"
        }
        if (n23 % 5 === 0){
            s8 += " - 5"
        }
    }
    else{
        s8 += " no es divisble por ninguno"
    }
    n23 % 2 === 0 ? s8 += ", es un numero par" : s8 += ", es un numero impar"
    n23 > 50 ? s8 += " y es mayor a 50" : s8 += " y es menor a 50"
}
else{
    s8 = "No es un numero valido"
}
console.log(s8)
