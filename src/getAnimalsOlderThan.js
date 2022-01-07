const data = require('../data/zoo_data');

function getAnimalsOlderThan(animal, age) {
  // seu código aqui

  const specieObj = data.species.filter(
    (element, indexSpecies) => element.name === animal,
  );

  const ageGreaterThan = specieObj[0].residents.every(
    (resident) => resident.age > age,
  );

  return ageGreaterThan;
}

module.exports = getAnimalsOlderThan;
