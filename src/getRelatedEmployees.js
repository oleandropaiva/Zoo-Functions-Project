const data = require('../data/zoo_data');

function isManager(id) {
  return data.employees.some((element) => element.managers.includes(id));
}

function getRelatedEmployees(idMananger) {
  if (isManager(idMananger)) {
    return data.employees.filter((element2) => element2.managers.includes(idMananger))
      .map(({ firstName, lastName }) => `${firstName} ${lastName}`);
  }
  throw new Error('O id inserido não é de uma pessoa colaboradora gerente!');
}

module.exports = { isManager, getRelatedEmployees };

/* recebi ajuda da Ladylane Turma 19-Tribo-C - Semana OnTrack */
