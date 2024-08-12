let products = {
  Laptop: true,
  Smartphone: false,
  Tablet: true,
  Monitor: false,
};
let productsEntries = Object.entries(products);
productsEntries = productsEntries.filter(function (productsEntrie) {
  return productsEntrie[1];
});
let objeto = {};
productsEntries.map(function (product) {
  objeto[product[0]] = product[1];
});

let surveyResults = {
  favoriteColor: "Blue",
  likesPizza: "Yes",
  ageGroup: "25-34",
};
let resultsEntries = Object.entries(surveyResults);
let miArraysito = [];
resultsEntries.map(function (resultsEntrie) {
  miArraysito.push([resultsEntrie[0]] + ": " + resultsEntrie[1]);
});

let grades = { Alice: 85, Bob: 75, Carol: 85, David: 90, Eve: 75 };
let gradesEntries = Object.values(grades);
let result = [];
gradesEntries.map(function (gradesEntrie) {
  if (!result.includes(gradesEntrie)) {
    result.push(gradesEntrie);
  }
});
console.log(result.length);

let cart = { Laptop: 1000, Smartphone: 700, Tablet: 300, Monitor: 200 };
let cartEntries = Object.entries(cart);
let suma = 0;
cartEntries.map(function (cartEntrie) {
  suma += cartEntrie[1];
});

let employees = { John: 4500, Jane: 7000, Mike: 3000, Alice: 5500, Bob: 4800 };
let employeesEntries = Object.keys(employees);
employeesEntries = employeesEntries.filter(function (employee) {
  return employees[employee] > 5000;
});

let products1 = {
  Laptop: "A high performance laptop.",
  Smartphone: "A latest model smartphone.",
  Tablet: "A lightweight tablet.",
};
let products1Entries = Object.keys(products1);
let productsDescripction = {};
products1Entries.map(function (products1Entrie) {
  productsDescripction[products1Entrie] = products1[products1Entrie].length;
});

let colores = [
  { nombre: "rojo", rgb: "rgb(255, 0, 0)" },
  { nombre: "verde", rgb: "rgb(0, 255, 0)" },
  { nombre: "azul", rgb: "rgb(0, 0, 255)" },
  { nombre: "amarillo", rgb: "rgb(255, 255, 0)" },
  { nombre: "cian", rgb: "rgb(0, 255, 255)" },
  { nombre: "magenta", rgb: "rgb(255, 0, 255)" },
  { nombre: "blanco", rgb: "rgb(255, 255, 255)" },
  { nombre: "negro", rgb: "rgb(0, 0, 0)" },
  { nombre: "gris", rgb: "rgb(128, 128, 128)" },
  { nombre: "naranja", rgb: "rgb(255, 165, 0)" },
  { nombre: "morado", rgb: "rgb(128, 0, 128)" },
  { nombre: "rosado", rgb: "rgb(255, 192, 203)" },
  { nombre: "marrón", rgb: "rgb(165, 42, 42)" },
  { nombre: "beige", rgb: "rgb(245, 245, 220)" },
  { nombre: "turquesa", rgb: "rgb(64, 224, 208)" },
  { nombre: "lila", rgb: "rgb(200, 162, 200)" },
  { nombre: "oliva", rgb: "rgb(128, 128, 0)" },
  { nombre: "salmon", rgb: "rgb(250, 128, 114)" },
  { nombre: "púrpura", rgb: "rgb(128, 0, 128)" },
  { nombre: "teal", rgb: "rgb(0, 128, 128)" },
  { nombre: "azul claro", rgb: "rgb(173, 216, 230)" },
];

function existColor(color, valor, colors) {
  keys = [];
  values = [];
  colors.map(function (col) {
    keys.push(Object.keys(col));
    values.push(Object.values(col));
  });
  let isKey = keys.some(function (key) {
    return key[0] == valor;
  });
  let isValue = values.some(function (value) {
    return value[0] == color;
  });
  return isValue && isKey;
}

let team1WithoutRepeated = [
  "Harry Potter",
  "Hermione Granger",
  "Ron Weasley",
  "Draco Malfoy",
  "Neville Longbottom",
  "Luna Lovegood",
  "Ginny Weasley",
  "Severus Snape",
  "Sirius Black",
  "Remus Lupin",
];

let team2WithoutRepeated = [
  "Luna Lovegood",
  "Draco Malfoy",
  "Harry Potter",
  "Gilderoy Lockhart",
  "Sirius Black",
  "Albus Dumbledore",
  "Minerva McGonagall",
  "Hermione Granger",
  "Ron Weasley",
  "Rubeus Hagrid",
];

let wizards = {
  team1,
  team2,
};

function formTeams(wizards) {
  teams = Object.values(wizards);
  let repeated = [];
  let team1WithoutRepeated = [];
  let team2WithoutRepeated = [];
  teams[0].map(function (team) {
    if (teams[1].includes(team)) {
      repeated.push(team);
    } else {
      team1WithoutRepeated.push(team);
    }
  });

  teams[1].map(function (team) {
    if (!teams[0].includes(team)) {
      team2WithoutRepeated.push(team);
    }
  });
  return {
    team1WithoutRepeated,
    team2WithoutRepeated,
    repeated,
  };
}

let studentsGrades = { Jhon: 85, Jane: 92, Jim: 78, Jil: 88 };
function filterByKey(studentsGrades, key) {
  return studentsGrades[key]
    ? {
        [key]: studentsGrades[key],
      }
    : "No se ha encontrado la key";
}
