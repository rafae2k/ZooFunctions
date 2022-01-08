const { employees, species } = require('../data/zoo_data');

function getOldestFromFirstSpecies(...ids) {
  let older;
  let animalByResponsableId;
  ids.forEach((id) => {
    animalByResponsableId = employees.find((employee) => employee.id === id);

    const animal = species.find(
      (specie) => animalByResponsableId.responsibleFor[0] === specie.id,
    );
    older = animal.residents.reduce((acc, resident) => (acc.age > resident.age ? acc : resident));
  });
  return Object.values(older);
}

module.exports = getOldestFromFirstSpecies;
