let character1 = {
  name: "shrek",
  species: "ogro",
};
let { name, species } = character1;

let character2 = {
  name: "burro",
  species: "burro",
  age: 10,
};
let { name: characterName, age: characterAge } = character2;

let character3 = {
  name: "burro",
  species: "burro",
  age: 10,
};
let { name: name3, ocupacion = "desconocida" } = character3;

let character4 = {
  name: "shrek",
  species: "ogro",
  age: 30,
  friends: ["fiona", "burro"],
};
let {
  name: name4,
  species: species4,
  age: age4,
  friends: friends4,
  enemies = [],
} = character4;

let character5 = {
  name: "shrek",
  species: "ogro",
  age: 30,
  friends: ["fiona", "burro"],
};
let { name: name5, friends: friends5 } = character5;
let [friend5] = friends5;

let character6 = {
  name: "shrek",
  species: "ogro",
  age: 30,
};
let character7 = {
  name: "fiona",
  species: "ogro",
  age: 29,
};
let character8 = {
  name: "burro",
  species: "burro",
  age: 10,
};
let characters = [character6, character7, character8];
let [
  { name: nameShrek, species: speciesShrek, age: ageShrek },
  { name: nameFiona, species: speciesFiona, age: ageFiona },
  { name: nameBurro, species: speciesBurro, age: ageBurro },
] = characters;
console.log(nameShrek + nameBurro + nameFiona);

character9 = {
  name: "shrek",
  species: "ogro",
  age: 30,
  friends: [
    (character10 = {
      name: "fiona",
      species: "ogro",
      age: 29,
    }),
    (character11 = {
      name: "burro",
      species: "burro",
      age: 10,
    }),
  ],
};
let {
  name: name9,
  species: species9,
  friends: [{ name: name10 }, { name: name11 }],
} = character9;

let film = {
  title: "Shrek",
  year: 2019,
  characters: [
    (character1 = {
      name: "shrek",
      species: "ogro",
      rol: "prinscipal",
    }),
    (character2 = {
      name: "fiona",
      species: "ogro",
      rol: "principal",
    }),
  ],
};

let { title, characters: characters1 } = film;
characters1 = characters1.filter(function (character) {
  return character.rol == "principal";
});
let characterName1 = [];
characters1.map(function (character) {
  characterName1.push(character.name);
});

let missions = {
  title: "Shrek",
  year: 2019,
  details: {
    principalMission: {
      description: "descripcion1",
      characters: ["shrek", "burro"],
    },
    secundaryMission: {
      description: "descripcion2",
      characters: ["burro", "fiona"],
    },
  },
};
let {
  details: {
    principalMission: { description },
    secundaryMission: { characters: characters2 },
  },
} = missions;

let events = {
  name: "evento1",
  date: "hoy",
  guests: [
    (guest1 = {
      name: "shrek",
      confirm: false,
    }),
    (member2 = {
      name: "fiona",
      confirm: true,
    }),
  ],
};
let { name: name12, guests } = events;
guests = guests.filter(function (guest) {
  return guest.confirm;
});
let confirmGuests = [];
guests.map(function (guest) {
  confirmGuests.push(guest.name);
});

let band = {
  name: "banda1",
  genre: "genero1",
  members: [
    (member1 = {
      name: "shrek",
      instrument: "instrumento1",
      experience: 30,
    }),
    (member2 = {
      name: "fiona",
      instrument: "instrumento2",
      experience: 20,
    }),
  ],
};
let { name: name13, members } = band;
let experiencedMembers = [];
members = members.filter(function (member) {
  return member.experience > 5;
});
members.map(function (member) {
  experiencedMembers.push(member.instrument);
});

let ogre = {
  name: "shrek",
  age: 30,
};
let princess = {
  name: "fiona",
  age: 27,
};
function createCouple(ogre, princess) {
  let { name: ogreName, age: ogreAge } = ogre;
  let { name: princessName, age: princessAge } = princess;
  let couple = { ogreName, ogreAge, princessName, princessAge };
  if (checkAge(couple)) {
    couple = addMission(couple);
  }
  return couple;
}
function addMission(couple) {
  couple.mission = ["Mision incial"];
  return couple;
}
function checkAge({ ogreAge, princessAge }) {
  return ogreAge > 18 || princessAge > 18;
}
