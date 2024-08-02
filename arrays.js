let numbers = [];
numbers.push(1, 2, 3, 4, 5);
console.log(numbers);
numbers.pop();

numbers.pop();
console.log(numbers);
numbers.unshift(4);

let colors = [];
colors.push("red", "blue", "green");
colors.shift();

let fruits = [];
fruits.push("apple", "banana", "orange");
fruits.pop();
fruits.pop();

fruits.unshift("grape", "kiwi");

fruits.shift();
fruits.shift();

colors.push("yellow");

colors.shift();

function function1(name, notes, aprovedNote) {
  disapproved = notes.filter(function (note) {
    return note < aprovedNote;
  });
  approved = notes.filter(function (note) {
    return note >= aprovedNote;
  });
  note10 = notes.includes(10);
  scratchingNote = notes.includes(aprovedNote);
  console.log(name);
  console.log("Cantidad de materias " + notes.length);
  console.log("Materias aprovadas " + approved.length);
  console.log("Notas de las aprovadas " + approved);
  console.log("Materias desaprovadas " + disapproved.length);
  console.log("Notas de las desaprovadas " + disapproved);
  console.log(
    note10 ? "El alumno tuvo algun 10" : "El alumno no tuvo ningun 10"
  );
  console.log(
    scratchingNote
      ? "Aprovo alguna raspando"
      : "No hubo ningun caso donde haya aprovado raspando"
  );
  console.log(disapproved.length > 0 ? "No paso de año" : "Paso de año");
}
