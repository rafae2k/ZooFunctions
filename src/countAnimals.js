const data = require('../data/zoo_data');

function noSpecieArg() {
  const animals = {};
  data.species.forEach((specie) => {
    animals[specie.name] = specie.residents.length;
  });
  return animals;
}

function specieArg(animal) {
  let numberOfResidents = 0;
  data.species.forEach((element) => {
    if (element.name === animal.specie) numberOfResidents = element.residents.length;
  });
  return numberOfResidents;
}

function getNumberOfResidentsBySex(animal) {
  let numberOfResidentsBySex = 0;
  data.species.forEach((element) => {
    if (element.name === animal.specie) {
      element.residents.forEach((resident) => {
        if (resident.sex === animal.sex) {
          numberOfResidentsBySex += 1;
        }
      });
    }
  });
  return numberOfResidentsBySex;
}

function countAnimals(animal) {
  if (!arguments.length) {
    return noSpecieArg();
  }
  if (Object.keys(animal).length === 1) {
    return specieArg(animal);
  }
  if (Object.keys(animal).length === 2) {
    return getNumberOfResidentsBySex(animal);
  }
}

module.exports = countAnimals;
