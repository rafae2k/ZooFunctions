const data = require("../data/zoo_data");

function getSpeciesByIds(...args) {
  const speciesById = [];

  if (args.length === 0) return speciesById;

  args.forEach((arg) => {
    const specieObj = data.species.filter(
      (element, indexSpecies) => element.id === arg
    );
    speciesById.push(specieObj[0]);
  });
  return speciesById;
}

// getSpeciesByIds(
//   '89be95b3-47e4-4c5b-b687-1fabf2afa274',
//   '0938aa23-f153-4937-9f88-4858b24d6bce',
//   'e8481c1d-42ea-4610-8e11-1752cfc05a46'
// );

module.exports = getSpeciesByIds;
