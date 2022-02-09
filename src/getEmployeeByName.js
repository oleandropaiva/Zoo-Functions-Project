const { employees } = require('../data/zoo_data');
const data = require('../data/zoo_data');

function getEmployeeByName(employeeName) {
  if (!employeeName) {
    return {};
  }
  const employee = data.employees.find((obj) => obj.firstName === employeeName
  || obj.lastName === employeeName);

  return employee;
}

module.exports = getEmployeeByName;

/* recebi ajuda do aluno Luis Pastana Tribo C */
