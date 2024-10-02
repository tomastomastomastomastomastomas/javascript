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

function assemblerPart() {
  return new Promise((resolve, reject) => {
    console.log("Armando la parte");
    setTimeout(() => {
      resolve(console.log("Parte armada"));
    }, 2000);
  });
}

function manageAssembly1() {
  assemblerPart().then(() =>
    assemblerPart().then(() =>
      assemblerPart().then(() => console.log("finikitado"))
    )
  );
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

function getInformation() {
  return new Promise((resolve, reject) => {
    console.log("Obteniendo informacion");
    setTimeout(() => {
      resolve(console.log("Informacion obtenida"));
    }, 2000);
  });
}

function manageAssembly2() {
  getInformation().then(() =>
    assemblerPart().then(() =>
      getInformation().then(() =>
        assemblerPart().then(() => console.log("finikitado"))
      )
    )
  );
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

function readManual() {
  return new Promise((resolve, reject) => {
    console.log("Leyendo manual");
    setTimeout(() => {
      resolve(console.log("Manual leido"));
    }, 2000);
  });
}

function downloadManual() {
  return new Promise((resolve, reject) => {
    console.log("Descargando manual");
    setTimeout(() => {
      resolve(console.log("Manual Descargado"));
    }, 2000);
  });
}

readManual().then(() =>
  downloadManual().then(() =>
    assemblerPart().then(() =>
      readManual().then(() =>
        downloadManual().then(() =>
          assemblerPart().then(() =>
            readManual().then(() =>
              downloadManual().then(() =>
                assemblerPart().then(() => console.log("finikitado"))
              )
            )
          )
        )
      )
    )
  )
);

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

function assemblerParts() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      let error = Math.random() > 0.1;
      if (error) {
        resolve(console.log("Parte armada"));
      } else {
        reject(console.log("Error al armar la parte"));
      }
    }, 2000);
  });
}

assemblerParts()
  .then(() =>
    assemblerParts().then(() =>
      assemblerParts().then(() => console.log("finikitado"))
    )
  )
  .catch();
