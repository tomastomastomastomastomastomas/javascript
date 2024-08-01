function manageOrder() {
  let name = prompt("Ingrese su nombre: ");
  console.log(name);
  let isName = verifyName(name);
  while (!isName) {
    name = prompt("Ingrese su nombre: ");
    console.log(name);
    isName = verifyName(name);
  }
  greetCustomer(name);
  let age = prompt("Ingrese su edad: ");
  console.log(age);
  let isAge = verifyAge(age);
  while (!isAge) {
    age = prompt("Ingrese su edad: ");
    console.log(age);
    isAge = verifyAge(age);
  }
  let warning = verifyAdult(age);
  if (warning) {
    console.log("Usted no puede consumir bebidas alcohólicas");
  }

  let product = prompt("Ingrese el producto: ");
  console.log(product);
  let price = verifyProduct(product);
  while (price == 0) {
    product = prompt("Ingrese el producto: ");
    console.log(product);
    price = verifyProduct(product);
  }

  let quantity = prompt("Ingrese la cantidad: ");
  console.log(quantity);
  let isQuantity = verifyQuantity(quantity);
  while (!isQuantity) {
    quantity = prompt("Ingrese la cantidad: ");
    console.log(quantity);
    isQuantity = verifyQuantity(quantity);
  }

  let cost = calculatePrice(quantity, price);
  let discount = applyDiscount(age);

  let method = prompt("Ingrese el metodo de pago ( E - T - A ):");
  let isMethod = verifyPaymentMethod(method);
  console.log(method);
  if (isMethod) {
    discount = paymentMethod(method, discount);
  }
  if (evaluateRushHour()) {
    console.log("Podria haber demoras");
  }
  let discountCost = cost * discount;
  tax = applyTax(cost - discountCost);
  let total = cost - discountCost + tax;
  showSummary(cost, discount, discountCost, tax, total);
}
function greetCustomer(name) {
  console.log("Hola " + name + "!");
}
function verifyAdult(age) {
  return age < 18 ? true : false;
}
function verifyAge(age) {
  age = parseInt(age);
  return !isNaN(age) && age > 0 && age <= 100;
}
function verifyProduct(product) {
  switch (product.toLowerCase().trim()) {
    case "banana":
      return 1000;
    case "manzana":
      return 1500;
    case "lechuga":
      return 2000;
    default:
      return 0;
  }
}
function verifyName(name) {
  return name != null && name.trim() != "";
}
function verifyQuantity(quantity) {
  quantity = parseInt(quantity);
  return !isNaN(quantity) && quantity > 0;
}
function verifyPaymentMethod(method) {
  if (method != null && method.trim() != "") {
    return (
      method.toUpperCase() === "E" ||
      method.toUpperCase() === "A" ||
      method.toUpperCase() === "T"
    );
  } else {
    return false;
  }
}
function calculatePrice(quantity, price) {
  return quantity * price;
}
function applyDiscount(age) {
  return age >= 60 ? 0.1 : 0;
}
function paymentMethod(method, discount) {
  return method.toUpperCase() === "E" ? discount + 0.1 : discount;
}
function evaluateRushHour() {
  let hour = new Date();
  return 12 <= hour.getHours() && 13 >= hour.getHours() ? true : false;
}
function applyTax(total) {
  return total * 0.05;
}
function showSummary(cost, discount, discountCost, tax, total) {
  console.log(
    "Costo del producto: " +
      cost +
      "\nDescuento: " +
      discount +
      "%" +
      "\nDescuento del costo: " +
      discountCost +
      "\nCosto decontado: " +
      (cost - discountCost) +
      "\nImpuesto del 5%: " +
      tax +
      "\nCosto total: " +
      total
  );
}
