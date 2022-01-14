const { employees } = require('../data/zoo_data');
const getSpeciesByIds = require('./getSpeciesByIds');

function getEmployeeById(id) {
  if (employees.find((employee) => employee.id === id)) {
    const {
      id: employeeId,
      firstName,
      lastName,
      responsibleFor,
    } = employees.find((employee) => employee.id === id);

    return {
      id: employeeId,
      fullName: `${firstName} ${lastName}`,
      species: getSpeciesByIds(...responsibleFor).map((animal) => animal.name),
      locations: getSpeciesByIds(...responsibleFor).map((animal) => animal.location),
    };
  }
  throw new Error('Informações inválidas');
}

function getEmployeeByName(name) {
  if (employees.find((employee) => employee.lastName === name)
  || employees.find((employee) => employee.firstName === name)) {
    const {
      id: employeeId,
      firstName,
      lastName,
      responsibleFor,
    } = employees.find((employee) => employee.lastName === name)
    || employees.find((employee) => employee.firstName === name);
    return {
      id: employeeId,
      fullName: `${firstName} ${lastName}`,
      species: getSpeciesByIds(...responsibleFor).map((animal) => animal.name),
      locations: getSpeciesByIds(...responsibleFor).map((animal) => animal.location),
    };
  }
  throw new Error('Informações inválidas');
}

function getAllEmployees() {
  return employees.map(({
    id: employeeId,
    firstName,
    lastName,
    responsibleFor,
  }) => {
    const employee = {
      id: employeeId,
      fullName: `${firstName} ${lastName}`,
      species: getSpeciesByIds(...responsibleFor).map((animal) => animal.name),
      locations: getSpeciesByIds(...responsibleFor).map((animal) => animal.location),
    };
    return employee;
  });
}

function getEmployeesCoverage({ name, id } = {}) {
  if (name) return getEmployeeByName(name);
  if (id) return getEmployeeById(id);
  if (!name || !id) return getAllEmployees();
}

// getEmployeesCoverage({ name: 'Sharonda' });
// getEmployeesCoverage({ id: '4b40a139-d4dc-4f09-822d-ec25e819a5ad' });
// getEmployeesCoverage();

module.exports = getEmployeesCoverage;
