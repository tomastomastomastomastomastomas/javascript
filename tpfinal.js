function manageOrder(name, age, quantity, price, method) {
  console.log(greetCustomer(name));
  let warning = verifyAge(age);
  if (warning) {
    console.log("Usted no puede consumir bebidas alcohólicas");
  }
  let cost = calculatePrice(quantity, price);
  let discount = applyDiscount(age);
  discount = paymentMethod(method, discount);
  if (evaluateRushHour()) {
    console.log("Podria haber demoras");
  }
  let discountCost = cost * discount;
  tax = applyTax(cost - discountCost);
  let total = cost - discountCost + tax;
  console.log(showSummary(cost, discount, discountCost, tax, total));
}
function greetCustomer(name) {
  return "Hola " + name + "!";
}
function verifyAge(age) {
  return age < 18 ? true : false;
}
function calculatePrice(quantity, price) {
  return quantity * price;
}
function applyDiscount(age) {
  return age >= 60 ? 0.1 : 0;
}
function paymentMethod(method, discount) {
  return method === "E" ? discount + 0.1 : discount;
}
function evaluateRushHour() {
  let hour = new Date();
  return 12 <= hour.getHours() && 13 >= hour.getHours() ? true : false;
}
function applyTax(total) {
  return total * 0.05;
}
function showSummary(cost, discount, discountCost, tax, total) {
  return (
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
