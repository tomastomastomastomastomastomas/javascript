let jedi1 = {
  id: 1,
  name: "nombre1",
  level: "Maestro",
  specialty: "Uso de la Fuerza",
  skills: ["Telequinesis", "Sable de Luz"],
};

let jedi2 = {
  id: 2,
  name: "nombre2",
  level: "Padawan",
  specialty: "Combate con sable de luz",
  skills: ["Sable de Luz", "Telequinesis"],
};
let jedis = [jedi1, jedi2];

function addJedi(jedis, newJedi) {
  let isJedi = existJedi(jedis, newJedi.id);
  if (!isJedi) {
    jedis.push(newJedi);
  }
  return jedis;
}

function updateInfo(jedis, id, key, value) {
  jedis.map(function (jedi) {
    if (id == jedi.id && jedi[key]) {
      jedi[key] = value;
    }
  });
  return jedis;
}

function getMasters(jedis) {
  return jedis.filter(function (jedi) {
    return jedi.level == "Maestro";
  });
}

function getJediByLevel(jedis, level) {
  if (existLevel(level)) {
    jedis = jedis.filter(function (jedi) {
      return jedi.level == level;
    });
  }
  return jedis;
}

function existLevel(level) {
  return level == "Padawan" || level == "Maestro" || level == "Caballero";
}

function existJedi(jedis, id) {
  return jedis.some(function (jedi) {
    return jedi.id == id;
  });
}

function addSkills(jedis, id, skills) {
  jedis.map(function (jedi) {
    if (jedi.id == id) {
      skills = skills.filter(function (skill) {
        return !jedi.skills.includes(skill);
      });
      jedi.skills = [...jedi.skills, ...skills];
    }
  });
  return jedis;
}

function deleteJedi(jedis, id) {
  if (existJedi(jedis, id)) {
    return jedis.filter(function (jedi) {
      return jedi.id != id;
    });
  }
}

function compareJedis(jedi1, jedi2) {
  if (existLevel(jedi1.level) && existLevel(jedi2.level)) {
    let comparedJedis = {
      nameFirstJedi: jedi1.name,
      nameSecondJedi: jedi2.name,
      levelFirstJedi: jedi1.level,
      levelSecondJedi: jedi2.level,
    };
    jedi1["strong"] =
      jedi1.level == "Maestro" ? 3 : jedi1.level == "Caballero" ? 2 : 1;
    jedi2["strong"] =
      jedi2.level == "Maestro" ? 3 : jedi2.level == "Caballero" ? 2 : 1;
    if (jedi1.strong > jedi2.strong) {
      return {
        ...comparedJedis,
        mostStrong: "el mas fuerte es el primer jedi",
      };
    } else if (jedi1.strong < jedi2.strong) {
      return {
        ...comparedJedis,
        mostStrong: "el mas fuerte es el segundo jedi",
      };
    } else {
      return { ...comparedJedis, mostStrong: "tienen la misma fuerza" };
    }
  }
}
