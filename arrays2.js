let electronics = ["laptop", "phone", "tablet"];
let accessories = ["headphones", "charger", "case"];
let combineProducts = [...electronics, ...accessories];

let bestSellers = ["laptop", "phone", "tablet", "monitor"];
let [laptop, , , monitor] = bestSellers;

let saleItems = ["laptop", "phone", "headphones"];
console.log(
  saleItems.includes("phone")
    ? "Existe el producto phone"
    : "No existe el producto"
);

let wishlist = ["laptop", "phone", "headphones"];
let product = "laptop";
console.log(
  saleItems.includes(product)
    ? "El producto existe, su nombre es " + product
    : "No existe el producto"
);

let products = [
  "laptop",
  "phone",
  "tablet",
  "printer",
  "pen",
  "monitor",
  "keyboard",
  "mouse",
  "headphones",
  "camera",
  "notebook",
];
console.log(
  products.filter(function (productWithP) {
    return productWithP.includes("p");
  })
);

function combineProductLists(list1, list2) {
  return [...list1, ...list2];
}
let list1 = ["laptop", "phone"];
let list2 = ["monitor", "tablet", "camera"];
let list3 = combineProductLists(list1, list2);

function getTopTwo(list) {
  let [product1, product2] = list;
  return [product1, product2];
}
let list4 = getTopTwo(list2);

function isOnSale(list, offer) {
  list.some(function (product) {
    return product === offer;
  });
}

function areAllWordsLong(list) {
  list.every(function (product) {
    return product.length > 3;
  });
}

function areAllEven(numbers) {
  numbers.every(function (number) {
    return number % 2 == 0;
  });
}

function findProductWithLetter(list, letter) {
  return list.find(function (product) {
    return product.includes(letter);
  });
}

function createProduct(list, newProduct) {
  isProduct = list.some(function (product) {
    return product === newProduct;
  });
  if (isProduct) {
    console.log("El producto ya existe");
  } else {
    list.push(newProduct);
    return list;
  }
}

function arePricesInRange(prices) {
  return prices.every(function (price) {
    return price > 50 && price < 150;
  });
}

function formatExpensiveProducts(prices) {
  let newPrices = [];
  let newPrice;
  prices.filter(function (price) {
    newPrice = price > 100 ? "caro : " + price : "$" + price;
    newPrices.push(newPrice);
  });
  return newPrices;
}

function addIfNotExists(list, newProduct) {
  isProduct = list.some(function (product) {
    return product === newProduct;
  });
  if (isProduct) {
    console.log("El producto ya existe");
  } else {
    list.push(newProduct);
    return list;
  }
}

function createDescriptions(list, prices) {
  return list.map(function (product) {
    return product + " cuesta " + prices[list.indexOf(product)];
  });
}

function addToWishlist(list, newProduct) {
  isProduct = list.some(function (product) {
    return product === newProduct;
  });
  if (isProduct) {
    console.log("El producto ya existe");
  } else {
    if (list.length < 5) {
      list.push(newProduct);
      return list;
    }
  }
}

function inventoryMessages(list, inventory) {
  return list.map(function (product) {
    return inventory[list.indexOf(product)] > 0
      ? product + " esta en stock con " + inventory[list.indexOf(product)]
      : product + " esta agotado";
  });
}
