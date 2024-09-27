function calcularGastos(gastos) {
  let total = 0;
  for (gasto in gastos) {
    total += gastos[gasto];
  }
  return total;
}
let gastos = {
  categoria1: 20,
  categoria2: 50,
  categoria3: 90,
  categoria4: 100,
};

function calcularGastos(gastos) {
  let total = 0;
  for (gasto in gastos) {
    total += gastos[gasto];
  }
  return total;
}
let gastosClub = {
  categoria1: 20,
  categoria2: 50,
  categoria3: 90,
  categoria4: 100,
};

let tickets = [
  { nombre: "ticket1", precio: 10 },
  { nombre: "ticket2", precio: 20 },
  { nombre: "ticket2", precio: 30 },
];
function ajustarPrecios(tickets) {
  tickets.forEach(function (ticket) {
    ticket.precio *= 0.85;
  });
  return tickets;
}

let juegos = [
  { nombre: "juego1", precio: 100, popularidad: 10 },
  { nombre: "juego2", precio: 200, popularidad: 5 },
  { nombre: "juego3", precio: 300, popularidad: 2 },
];
function ajustarPrecios(juegos) {
  let total = 0;
  juegos.forEach(function (juego) {
    total +=
      juego.popularidad > 8 ? juego.precio / 1200 + 5 : juego.precio / 1200 + 8;
  });
  return total / Object.keys(juegos).length;
}

let productos = [
  { nombre: "Camiseta del Campeón", cantidad: 100, vendido: 30 },
  { nombre: "Gorra del Dibu", cantidad: 50, vendido: 20 },
  {
    nombre: "La Bufanda de los Campeones del Mundo",
    cantidad: 75,
    vendido: 25,
  },
];
function devolverStock(p) {
  let productosEnStock = p.map((producto) => ({ ...producto }));
  productosEnStock.forEach(function (producto, index) {
    producto.cantidad -= producto.vendido;
    console.log(p[index]);
    producto.vendido = 0;
    if (producto.cantidad > 10) {
      console.log(
        "La " +
          producto.nombre +
          " está bien abastecida. Cantidad restante en stock: " +
          producto.cantidad
      );
    } else {
      console.log(
        "La " +
          producto.nombre +
          " está en bajo stock!. Cantidad restante en stock: " +
          producto.cantidad
      );
    }
    console.log(
      "Porcentaje de stock restante: " +
        parseInt((producto.cantidad / p[index].cantidad) * 100)
    );
  });
  return productosEnStock;
}
const promociones = {
  Camisetas: "10% de descuento adicional",
  Gorras: "15% de descuento adicional",
  Bufandas: "20% de descuento adicional",
};
const usuarios = [
  {
    nombre: "Juan Pérez",
    email: "juan.perez@example.com",
    preferencias: ["Camisetas", "Gorras"],
  },
  {
    nombre: "María García",
    email: "maria.garcia@example.com",
    preferencias: ["Bufandas"],
  },
  {
    nombre: "Carlos López",
    email: "carlos.lopez@example.com",
    preferencias: [],
  },
];

function enviarMail(usuarios, promociones) {
  let total = 0;
  let promosAplicadas = {};
  console.log("Aca");
  usuarios.forEach(function (usuario) {
    if (usuario.preferencias.length > 0) {
      usuario.preferencias.forEach(function (preferencia) {
        if (promociones[preferencia]) {
          console.log(
            "Enviando correo a " +
              usuario.nombre +
              " (" +
              usuario.email +
              ") sobre " +
              preferencia +
              " - " +
              promociones[preferencia]
          );
          total++;
          if (promosAplicadas[preferencia]) {
            promosAplicadas[preferencia] += 1;
          } else {
            promosAplicadas[preferencia] = 1;
          }
        }
      });
    } else {
      console.log(
        "Enviando correo genérico a " + usuario.nombre + " (" + usuario.email
      );
      total++;
    }
  });
  console.log("Total de correos enviados : " + total);
  promosAplicadasEntries = Object.entries(promosAplicadas);
  for (let i = 0; i < promosAplicadasEntries.length; i++) {
    console.log(
      "- " + promosAplicadasEntries[i][0] + " : " + promosAplicadasEntries[i][1]
    );
  }
}

function generarPiramide(n1) {
  let piramide = "";
  for (let i = 1; i <= n1; i++) {
    piramide = "";
    for (let n = 1; n < i; n++) {
      piramide += n;
    }
    for (let n = i; n > 0; n--) {
      piramide += n;
    }
    console.log(piramide);
  }
}
