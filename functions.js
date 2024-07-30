//Declara una función llamada saludar que muestre en la consola "Hola, mundo!" cuando se llame. Ejecutarla.
function saludar(){
    return("Hola mundo")
}
console.log(saludar())
//Declara una función llamada despedirse que muestra en la consola "Adiós, mundo!" y llámala. Ejecutarla.
function despedirse(){
    return("Adios mundo")
}
console.log(despedirse())
//Declara una función llamada calcularCuadrado que acepte un número como parámetro y devuelva el cuadrado de ese número. Ejecutarla.
function calcularCuadrado(numero){
    return(numero * numero)
}
console.log(calcularCuadrado(4))
//Escribir una funcion llamada minutosAHoras que reciba un número entero de minutos como parámetro, y devuelva un número representando la misma cantidad de tiempo pero en horas. 
function minutosAHoras(minutos){
    return(minutos / 60)
}
//Declara una función llamada saludarPersona que acepte un parámetro nombre y muestre en la consola "Hola, " seguido del nombre.
function saludarPersona(nombre){
    return("hola " + nombre)
}
//Declara una función llamada sumarNumeros que acepte dos números como parámetros y devuelva su suma.
function sumarNumeros(numero1, numero2){
    return(numero1 + numero2)
}
//Declara una función llamada multiplicarNumeros que acepte tres números como parámetros y devuelva su producto.
function multiplicarNumeros(numero1, numero2, numero3){
    return(numero1 * numero2 * numero3)
}
//Escribir una funcion que se llame concatenar3, que reciba 3 strings como parametros. Definir dentro de la funcion una variable que se llame separador. La funcion debe devolver un solo string, concatenando los 3 ingresados como parametro y separados por el separador. 
function concatenar3(cadena1, cadena2, cadena3){
    let separador = " "
    return(cadena1 + separador + cadena2 + separador + cadena3)
}
//Escribir una funcion llamada promedioDeCuatroNumero, que reciba 4 numeros como parametros y devuelva el promedio de los numeros introducidos.
function promedioDeCuatroNumero(numero1, numero2, numero3, numero4){
    let promedio = (numero1 + numero2 + numero3 + numero4) / 4
    return(promedio)
}
//Declara una función llamada presentarPersona que acepta dos parámetros, nombre y edad, y muestre en la consola "Mi nombre es [nombre] y tengo [edad] años."
function presentarPersona(nombre, edad){
    return("Mi nombre es " + nombre + " y tengo " + edad + " años")
}
//Declara una función llamada areaRectangulo que acepte dos parámetros, ancho y alto, y devuelva el área del rectángulo. Comprobarlo asignando la función a una variable, y mostrando en consola el valor de la misma.
function areaRectangulo(ancho, alto){
    return ancho * alto / 2
}
let rectangulo = areaRectangulo(2, 3)
console.log(rectangulo)
//Declara una función llamada calcularPropina que acepte un número como parámetro y devuelva la cantidad de propina a dejar en base a cuanto salió el total de la comida. Comprobarlo asignando la función a una variable y mostrando en consola el valor de la misma. 
function calcularPropina(pago){
    let calculoPropina = pago * 0.1
    return calculoPropina
}
let propina = calcularPropina(2000)
console.log(propina)
//Declara una función llamada calcularSalario que acepta dos parámetros, horasTrabajadas y tarifaPorHora, y devuelva el salario calculado.   
function calcularSalario(horasTrabajadas, tarifaPorHora){
    return(horasTrabajadas * tarifaPorHora)
}
//Declara una función llamada calcularDescuento que acepte un parámetro precioOriginal. La función debe declarar una variable descuento con un valor de 0.1 (10%). Luego, calcula el precio con descuento y devuelve el resultado.
function calcularDescuento(precioOriginal){
    const descuento = 0.1
    return(precioOriginal * descuento)
}
//Declara una función llamada evaluarNumero que acepte un parámetro num. La función debe devolver "positivo" si el número es mayor que 0, "negativo" si es menor que 0, y "cero" si es exactamente 0.
function evaluarNumero(num){
    if (num < 0){
        return("Negativo")
    }
    else if (num > 0){
        return("Positivo")
    }
    else{
        return("Cero")
    }
}
//Declara una función llamada evaluarEdad que acepte un parámetro edad. La función debe devolver "Menor de edad" si la edad es menor de 18, y "Mayor de edad" si es 18 o mayor.
function evaluarEdad(edad){
    if (edad < 18){
        return("Menor de edad")
    }
    else{
        return("Mayor de edad")
    }
}
//Declara una función llamada esPar que acepte un número como parámetro. Si el número es par, debe mostrar en la consola "El número es par". Si es impar, debe mostrar "El número es impar".
function esPar(numero){
    if (numero % 2 == 0){
        return("Es par")
    }
    else{
        return("Es impar")
    }
}
//Declara una función llamada compararNumeros que acepte dos números como parámetros. La función debe mostrar en la consola cuál de los dos números es mayor o si son iguales.
function compararNumeros(numero1, numero2){
    if (numero1 > numero2){
        return("El primero es mayor")
    }
    else if (numero1 < numero2){
        return("El segundo es mayor")
    }
    else{
        return("Son iguales")
    }
}
//Declara una función llamada sumaEsPar que acepte dos números como parámetros. La función debe mostrar en la consola si la suma de los dos números es par o impar.
function sumaEsPar(numero1, numero2){
    let suma = numero1 + numero2
    if (suma % 2 == 0){
        return("La suma es par")
    }
    else{
        return("La suma es impar")
    }
}
//Declara una función llamada ambosPositivos que acepte dos números como parámetros. La función debe mostrar en la consola si ambos números son positivos, si solo uno es positivo, o si ninguno es positivo.
function ambosPositivos(numero1, numero2){
    if (numero1 > 0 && numero2 > 0){
        return("Ambos son positivos")
    }
    else if (numero1 > 0 || numero2 > 0){
        return("Uno es positivo")
    }
    else{
        return("Ninguno es positivo")
    }
}
//Declara una función llamada calcularImpuesto que acepte un parámetro ingreso. Si el ingreso es menor de 10000, el impuesto es del 10%. Si es entre 10000 y 20000, el impuesto es del 15%. Si es mayor de 20000, el impuesto es del 20%. La función debe devolver el valor del impuesto.
function calcularImpuesto(ingreso){
    let impuesto
    if (ingreso < 10000){
        impuesto = 0.1
    }
    else if (ingreso < 20000){
        impuesto = 0.15
    }
    else{
        impuesto = 2
    }
    return(impuesto)
}
//Declara una función llamada clasificarNota que acepte un parámetro nota. Si la nota es 90 o más, devuelve "A". Si es entre 80 y 89, devuelve "B". Si es entre 70 y 79, devuelve "C". Si es entre 60 y 69, devuelve "D". Si es menor de 60, devuelve "F".
function clasificarNota(nota){
    if (nota > 90){
        return("A")
    }
    else if (nota > 80){
        return("B")
    }
    else if (nota > 70){
        return("C")
    }
    else if (nota > 60){
        return("D")
    }
    else{
        return("F")
    }
}