const data = require('../data/zoo_data');

function getEmployeeByName(name) {
  // seu código aqui
  const employee = {};

  if (name === undefined) return employee;

  const findByName = (employeeName, index) => {
    if (name === employeeName.firstName || name === employeeName.lastName) {
      Object.assign(employee, data.employees[index]);
    }
  };

  data.employees.filter(findByName);
  return employee;
}

module.exports = getEmployeeByName;
