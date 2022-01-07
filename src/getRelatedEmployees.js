const data = require('../data/zoo_data');

function isManager(code) {
  return data.employees.some((employees) =>
    employees.managers.find((ids) => ids === code));
}

function getRelatedEmployees(managerId) {
  if (isManager(managerId)) {
    const responsable = [];
    data.employees.forEach((employee) => {
      if (employee.managers.includes(managerId)) {
        responsable.push(`${employee.firstName} ${employee.lastName}`);
      }
    });
    return responsable;
  }
  throw new Error('O id inserido não é de uma pessoa colaboradora gerente!');
}

module.exports = { isManager, getRelatedEmployees };
