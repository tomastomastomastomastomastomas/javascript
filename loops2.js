function contarGoles(goles) {
  let i = 0;
  let equipo1;
  let equipo = [
    {
      equipo: "equipo 1",
      goles: 0,
    },
    {
      equipo: "equipo 2",
      goles: 0,
    },
  ];
  while (i < goles.length) {
    if (!equipo1) {
      equipo1 = goles[0].equipo;
    }
    if (goles[i].equipo == equipo1) {
      equipo[0].goles++;
    } else {
      equipo[1].goles++;
    }
    i++;
  }
  return equipo;
}
let goles = [
  { equipo: "Argentina", jugador: "lionel messi" },
  { equipo: "Argentina", jugador: "lionel messi" },
  { equipo: "España", jugador: "lionel messi" },
];

function contarToques(jugada) {
  let i = 0;
  while (i < jugada.length - 1) {
    i++;
  }
  return i;
}
let jugada = ["Messi", "Di Maria", "Doyel", "fuera"];

function practicarSaques() {
  let random = 0;
  do {
    random = Math.floor(Math.random() * 10);
    console.log(random);
    if (random < 7) {
      console.log("Le erro");
    } else {
      console.log("Saco bien");
    }
  } while (random < 7);
}

function recuentoGoleadores(jugadores) {
  let i = 0;
  let jugadoresUnicos = [];
  while (i < jugadores.length) {
    if (!jugadoresUnicos.includes(jugadores[i])) {
      jugadoresUnicos.push(jugadores[i]);
    }
    i++;
  }
  return jugadoresUnicos.length;
}
let jugadoresQueAnotaron = [
  "Messi",
  "Di Maria",
  "Messi",
  "Riquelme",
  "Maradona",
  "a",
];

rendimientoJugadores = {
  "Enzo Pérez": 11.5,
  "Frank Fabra": 9.8,
  "Nicolás De La Cruz": 12.3,
  "Cristian Medina": 10.2,
};
function analizarRendimiento(rendimiento) {
  let rendimientoEntries = Object.entries(rendimiento);
  let i = 0;
  let jugadores = [];
  while (i < rendimientoEntries.length) {
    if (rendimientoEntries[i][1] > 10) {
      jugadores.push(rendimientoEntries[i]);
    }
    i++;
  }
  return jugadores;
}

let productos = [
  { nombre: "producto1", precio: 200 },
  { nombre: "producto2", precio: 500 },
];
function calcularTotal(productos) {
  let i = 0;
  let precios = 0;
  while (i < productos.length) {
    precios += productos[i].precio;
    i++;
  }
  return precios;
}

let datosIngresados = [1, 2, , 23, "ada"];
function validarEntradas(datosIngresados) {
  let i = 0;
  do {
    if (
      !(
        datosIngresados[i] != "" &&
        datosIngresados[i] != undefined &&
        datosIngresados[i] != null
      )
    ) {
      return "Formulario inválido";
    }
    i++;
  } while (i < datosIngresados.length);
  return "Formulario válido";
}

let comentarios = [
  { usuario: "usuario1", comentario: "CHAY" },
  { usuario: "usuario2", comentario: "hola" },
];
function mostrarComentarios(comentarios) {
  let i = 0;
  while (i < comentarios.length) {
    console.log(comentarios[i].comentario);
    i++;
  }
}

function simularProgreso() {
  let i = 0;
  while (i <= 100) {
    console.log("Progreso: " + i + "%");
    i += 10;
  }
}

let productos1 = [
  { nombre: "nombre1", precio: 1, categoria: "1" },
  { nombre: "nombre2", precio: 2, categoria: "2" },
  { nombre: "nombre3", precio: 3, categoria: "1" },
];
function filtrarPorCategoria(productos, categoria) {
  let i = 0;
  let filtro = [];
  while (i < productos.length) {
    if (productos[i].categoria == categoria) {
      filtro.push(productos[i]);
    }
    i++;
  }
  return filtro;
}
