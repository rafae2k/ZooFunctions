const data = require('../data/zoo_data');

function getSpeciesByIds(...args) {
  const speciesById = [];

  if (args.length === 0) return speciesById;

  args.forEach((arg) => {
    const specieObj = data.species.filter(
      (element, indexSpecies) => element.id === arg,
    );
    speciesById.push(specieObj[0]);
  });
  return speciesById;
}

module.exports = getSpeciesByIds;
