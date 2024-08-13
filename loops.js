function sumarHastaLimite(limite) {
  let suma = 0;
  while (suma < limite) {
    suma = suma + 1;
  }
  return suma;
}

function contarPares(n) {
  let cont = 0;
  if (n < 0) {
    n *= -1;
  }
  n % 2 == 0 ?? (n -= 1);
  while (n > 1) {
    n -= 2;
    cont++;
  }
  return cont;
}

function multiplicar(a, b) {
  let negativo = false;
  if (b < 0) {
    b *= -1;
    negativo = true;
  }
  while (b > 1) {
    a = a + a;
    b -= 1;
  }
  return (negativo = true ? a * -1 : a);
}

function mostrarImpares(n) {
  let negativo = false;
  if (n < 0) {
    n *= -1;
    negativo = true;
  }
  n % 2 == 0 ? (n -= 1) : n;
  while (n > 0) {
    console.log(negativo ? n * -1 : n);
    n -= 2;
  }
}

function calcularFactorial(n) {
  cont = n;
  while (cont > 1) {
    cont--;
    n = n * cont;
  }
  return n;
}

function cuentaRegresiva(n) {
  if (n < 0) {
    n *= -1;
  }
  do {
    console.log(n);
    n--;
  } while (n > 0);
}

function sumarDigitos(n) {
  let sum = 0;
  while (n > 1) {
    n = parseInt(n);
    sum = parseInt(sum);
    sum += n % 10;
    n /= 10;
  }
  return sum;
}

let numeros = [80, 90, 77, 55, 101];
function encontrarMayor(numeros) {
  let cont = 0;
  let numero = numeros[0];
  while (cont < numeros.length - 1) {
    numero = numero < numeros[cont + 1] ? numeros[cont + 1] : numero;
    cont++;
  }
  return numero;
}

function encontrarNumerosImpares() {
  let n = 1;
  let cantPar = 0;
  let cantImpar = 0;
  let par = [];
  let impar = [];
  do {
    n % 2 == 0 ? par.push(n) && cantPar++ : impar.push(n) && cantImpar++;
    n++;
  } while (n < 21);
  console.log(par + " " + impar);
  console.log(cantPar + " " + cantImpar);
}
