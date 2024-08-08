let personaje = {
  nombre: "nombre1",
  raza: "raza1",
  edad: 10,
  clase: "Mago",
  arma: "arma1",
};

personaje.aliado = "aliado1";

personaje.edad += 1;
personaje["edad"] += 1;

function existeEdad(personaje) {
  return personaje.edad ? (personaje.edad += 1) : null;
}

function existeAliado(personaje) {
  if (personaje.aliado) {
    return personaje.aliado.length == 10;
  }
}

function nombreIgualAliado(personaje) {
  return personaje.aliado === personaje.nombre;
}

function agregarDescripcion(personaje) {
  return (
    "Nombre: " +
    personaje.nombre +
    ", Edad: " +
    personaje.edad +
    ", Arma: " +
    personaje.arma +
    ", Raza: " +
    personaje.raza
  );
}

function mayorDe100(personaje) {
  return personaje.edad > 100;
}

function nuevoObjeto(personaje) {
  return {
    nombre: personaje.nombre,
    edad: personaje.edad,
  };
}

personaje.habilidades = ["habilidad1", "habilidad2", "habilidad3"];
console.log(personaje.habilidades[1]);

function agregarHabilidad(personaje, nuevaHabilidad) {
  personaje.habilidades.push(nuevaHabilidad);
  return personaje;
}

function crearHabilidad(personaje, nuevaHabilidad) {
  let existeHabilidad = personaje.habilidades.some(function (habilidad) {
    return habilidad === nuevaHabilidad;
  });
  return existeHabilidad;
}

function cantidadHabilidades(personaje) {
  return personaje.habilidades.length;
}

personaje.aliados = ["aliado1", "aliado2", "aliado3"];
console.log(personaje.aliados[1]);

function agregarAliado(personaje, nuevoAliado) {
  personaje.aliados.push(nuevoAliado);
  return personaje;
}

function eliminarAliado(personaje, aliadoEliminado) {
  let aliados = personaje.aliados.filter(function (aliado) {
    return aliado != aliadoEliminado;
  });
  personaje.aliados = [...aliados];
  return personaje;
}

function nombresAliados(personaje) {
  return personaje.aliados;
}

function nuevaArma(personaje, arma) {
  personaje.arma = arma;
  return personaje;
}

function tieneClase(personaje, clase) {
  return personaje.clase === clase;
}

function actualizarPersonaje(personaje, propiedad, valor) {
  personaje[propiedad] = valor;
  return personaje;
}
