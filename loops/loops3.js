function contarAprobados(notas) {
  let cont = 0;
  for (let i = 0; i < notas.length; i++) {
    if (notas[i] === 10) {
      break;
    } else if (notas[i] < 6) {
      continue;
    } else {
      cont++;
    }
  }
  return cont;
}
let notas = [1, 5, 6, 7, 9, 7, 4];

let programas = ["programa1", "programa2", "programa3"];
function buscarPrograma(programas, programa) {
  let esta = false;
  for (let i = 0; i < programas.length; i++) {
    if (programas[i] == programa) {
      esta = true;
      break;
    }
  }
  return esta;
}

function contarNotasBajas(notas) {
  let cont = 0;
  for (let i = 0; i < notas.length; i++) {
    if (notas[i] > 4) {
      continue;
    } else {
      cont++;
    }
    return cont;
  }
}

let favoritos = ["programa", "programa2", "programa3"];
function seleccionarFavoritos(programas, favoritos) {
  let cont = 0;
  for (let i = 0; i < favoritos.length; i++) {
    if (programas.includes(favoritos[i])) {
      cont++;
    } else {
      continue;
    }
    if (cont == 3) {
      break;
    }
  }
  return cont;
}

function evaluarDesempeño(notas) {
  let excelente = true;
  for (let i = 0; i < favoritos.length; i++) {
    excelente = true;
    if (notas[i] >= 9) {
      continue;
    } else {
      excelente = false;
    }
  }
  return excelente;
}

let alumno = {
  alumno: [
    { nombre: "materia1", nota: 2 },
    { nombre: "matria2", nota: 6 },
    { nombre: "matria2", nota: 6 },
  ],
};
function filtrarAprobadas(alumno) {
  let materias = [];
  for (let i = 0; i < alumno.alumno.length; i++) {
    if (alumno[i].nota >= 6) {
      materias.push(alumno[i].materias);
    }
    if (materias.length >= 5) {
      break;
    }
  }
  return materias;
}

programas1 = [
  { nombre: "nombre1", calificacion: 2 },
  { nombre: "nombre1", calificacion: 8 },
];
function buscarMejorPrograma(programas) {
  let programa = programas[0].calificacion;
  for (let i = 0; i < programas.length - 1; i++) {
    if (programa < programas[i + 1].calificacion) {
      programa = programas[i + 1].calificacion;
    }
    if (programa == 10) {
      break;
    }
  }
  return programa;
}

let alumno1 = {
  materias: [
    { nombre: "materia1", esPractica: false },
    { nombre: "matria2", esPractica: true },
    { nombre: "matria2", esPractica: true },
  ],
};
function tienePracticas(alumno) {
  let cont = 0;
  for (let i = 0; i < alumno.materias.length; i++) {
    if (alumno.materias[i].esPractica) {
      cont++;
    } else {
      continue;
    }
    if (cont == 3) {
      break;
    }
  }
  return cont;
}

function buscarCanalFavorito(programas, favoritos) {
  let fav;
  for (let i = 0; i < favoritos.length; i++) {
    if (programas.includes(favoritos[i])) {
      fav = favoritos[i];
      break;
    } else {
      continue;
    }
  }
  return fav;
}
