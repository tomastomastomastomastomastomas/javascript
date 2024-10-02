/*Ejercicio 1: Ensamblar el dispositivo paso a paso
Descripción: Estás ensamblando las primeras tres partes del dispositivo. Cada parte necesita
un tiempo diferente para completarse, y no puedes avanzar al siguiente paso hasta que la parte
anterior esté completamente ensamblada. Debes manejar el ensamblaje de estas partes
usando callbacks para asegurarte de que cada una se haga en el orden correcto.
Instrucciones:
1. Simula el ensamblaje de tres partes del dispositivo, cada una con un tiempo diferente de
ejecución.
2. Usa setTimeout para simular el tiempo necesario para ensamblar cada parte.
3. El ensamblaje de cada parte debe depender de que la anterior haya terminado, usando
callbacks para pasar de una parte a la siguiente */

function buildFirstPart(callback) {
  setTimeout(function () {
    console.log("se hizo el 1");
    callback();
  }, 1000);
}
function buildSecondPart(callback) {
  setTimeout(function () {
    console.log("se hizo el 2");
    callback();
  }, 2000);
}
function buildThirdPart(callback) {
  setTimeout(function () {
    console.log("se hizo el 3");
    callback();
  }, 3000);
}

function buildDevice() {
  buildFirstPart(function () {
    buildSecondPart(function () {
      buildThirdPart(function () {
        console.log("terminaste");
      });
    });
  });
}

/*Ejercicio 2: Solicitar información para ensamblar las piezas)
Descripción: En el proceso de ensamblaje, necesitas pedir a otra sección de la fábrica
información clave sobre las especificaciones de cada parte. Esta información tarda en llegar, y
sólo puedes continuar ensamblando cuando recibas las especificaciones correctas.
Instrucciones:
1. Simula pedir información sobre cada parte del dispositivo y que esta tarda en llegar.
2. Una vez que recibas la información para una parte, debes usarla para continuar
ensamblando la siguiente.
3. Cada parte depende de la información recibida de la anterior, y debes usar callbacks
para manejar las respuestas*/

function getInformation(callback) {
  setTimeout(function () {
    console.log("se obtuvo la data");
    callback();
  }, 3000);
}
function assemblyPart1(callback) {
  setTimeout(function () {
    console.log("se hizo la parte 1");
    callback();
  }, 1000);
}
function assemblyPart2(callback) {
  setTimeout(function () {
    console.log("se hizo la parte 2");
    callback();
  }, 1000);
}
function assemblyPart3(callback) {
  setTimeout(function () {
    console.log("se hizo la parte 3");
    callback();
  }, 1000);
}

function buildDevice2() {
  getInformation(function () {
    assemblyPart1(function () {
      getInformation(function () {
        assemblyPart2(function () {
          getInformation(function () {
            assemblyPart3(function () {
              console.log("Se finikito");
            });
          });
        });
      });
    });
  });
}

/*Ejercicio 3: Obtener manuales de ensamblaje
Descripción: Antes de ensamblar ciertas partes más complejas del dispositivo, necesitas leer
los manuales de ensamblaje. Estos manuales tardan en descargarse y leerse, y debes
obtenerlos en un orden específico para poder continuar.
Instrucciones:
1. Simula la descarga y lectura de tres manuales de ensamblaje, cada uno en un orden
específico.
2. Usa setTimeout para simular el tiempo que tarda en descargarse y leerse cada
manual.
3. Cada manual debe leerse antes de continuar con la lectura del siguiente, utilizando
callbacks para controlar el flujo*/

function readManual(callback, manual) {
  setTimeout(function () {
    console.log("se leyo el manual " + manual);
    callback();
  }, 3000);
}

function downloadManual(callback, manual) {
  setTimeout(function () {
    console.log("se descargo el manual " + manual);
    callback();
  }, 1000);
}

function learnManuals() {
  readManual(function () {
    downloadManual(function () {
      readManual(function () {
        downloadManual(function () {
          readManual(function () {
            downloadManual(function () {
              console.log("termino");
            }, 3);
          }, 3);
        }, 2);
      }, 2);
    }, 1);
  }, 1);
}

/*Ejercicio 4: Problemas en el ensamblaje
Descripción: Durante el ensamblaje de algunas partes del dispositivo, existe una posibilidad
de que una de ellas no se ensamble correctamente. Si esto sucede, debes detener el proceso y
reportar el error.
Instrucciones:
1. Simula el ensamblaje de varias partes del dispositivo.
2. Para cada parte, incluye una probabilidad de fallo (por ejemplo, usando Math.random).
3. Si ocurre un fallo, el proceso de ensamblaje debe detenerse y el error debe ser
manejado apropiadamente usando callbacks.
4. Si no ocurre un fallo, el ensamblaje debe continuar normalmente hasta que todas las
partes estén ensambladas*/

function assemblyPart(failProbability, part, callback) {
  let fail = Math.random() > failProbability;
  if (fail) {
    console.log("Armando parte " + part);
    setTimeout(function () {
      console.log("Parte " + part + " terminada");
      callback();
    }, 2000);
  } else {
    console.log("Error al armar la parte " + part);
  }
}

function assemblyWithError() {
  assemblyPart(0.2, 1, function () {
    assemblyPart(0.7, 2, function () {
      console.log("Terminado");
    });
  });
}

/*Ejercicio 5: Ensamblaje complejo
Descripción: Estás en la parte final del ensamblaje del dispositivo, donde cada paso es más
complicado y depende completamente del anterior. El proceso se vuelve cada vez más difícil de
manejar a medida que avanza, lo que genera una estructura compleja de callbacks anidados.
Instrucciones:
1. Simula el ensamblaje de varias partes del dispositivo, cada una con diferentes tiempos
de ejecución.
2. Usa callbacks para manejar cada paso del ensamblaje, de modo que los pasos se
vayan ejecutando uno tras otro, en secuencia.
3. A medida que avanzas en el ensamblaje, observa cómo los callbacks se anidan y se
vuelven difíciles de manejar, creando lo que llamamos un "callback hell"*/

function assemblyEachPart(time, part, callback) {
  console.log("Armando parte " + part);
  setTimeout(function () {
    console.log("Parte " + part + " armada");
    callback();
  }, time);
}

assemblyEachPart(1000, 1, function () {
  assemblyEachPart(2000, 2, function () {
    assemblyEachPart(3000, 3, function () {
      console.log("Terminado");
    });
  });
});
