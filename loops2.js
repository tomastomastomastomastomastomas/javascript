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

function resumenTarjetas(tarjetasPartido) {
  do {} while (true);
}
let tarjetasPartido = {
  messi: {
    amarilla: 2,
    roja: 1,
  },
  diMaria: {
    amarilla: 1,
    roja: 0,
  },
};
