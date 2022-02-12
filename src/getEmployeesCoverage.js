const data = require('../data/zoo_data');

const { employees } = require('../data/zoo_data');

function getSpecies(...id) {
  return data.species.filter((elements) => id.includes(elements.id));
}

function getPeopleById(people) {
  return employees.find((elements) => elements.firstName.includes(people.name)
  || elements.lastName.includes(people.name)
  || elements.id.includes(people.id));
}

function peopleResponsability(people) {
  const wishedFuncionary = getPeopleById(people);
  const responsibleForFuncionary = wishedFuncionary.responsibleFor;
  return getSpecies(...responsibleForFuncionary).map((elements) => elements.name);
}

function animalLocation(people) {
  const funcionaryActual = getPeopleById(people).responsibleFor;
  return getSpecies(...funcionaryActual).map((elements) => elements.location);
}

function makeObject(people) {
  const funcionaryData = getPeopleById(people);
  const peopleAnimalsResp = peopleResponsability(people);
  const locationAnimal = animalLocation(people);
  return {
    id: funcionaryData.id,
    fullName: `${funcionaryData.firstName} ${funcionaryData.lastName}`,
    species: peopleAnimalsResp,
    locations: locationAnimal,
  };
}

function allPeopleIds() {
  const allIds = employees.map((elements) => elements.id);
  const obj = allIds.map((elemento) => ({
    id: elemento,
  }));
  return obj;
}

function getError(name, inputId) {
  let erro = false;
  employees.forEach((elements) => {
    const { firstName, lastName, id } = elements;

    if (firstName === name || lastName === name || id === inputId) {
      erro = true;
    }
  });
  return erro;
}
const allFuncionary = allPeopleIds();
const listAllFuncionary = allFuncionary.map((elements) => elements.id);
const allPeopleFuncionary = allFuncionary.map((element) => makeObject(element));

function getEmployeesCoverage(idF) {
  if (!idF) {
    return allPeopleFuncionary;
  }
  if (listAllFuncionary.find((element) => element === idF.id)) {
    makeObject(idF);
  }
  const { name, id } = idF;
  if (!getError(name, id)) {
    throw new Error('Informações inválidas');
  }
  return makeObject(idF);
}

module.exports = getEmployeesCoverage;

/* Recebi ajuda, na semana on track, dos alunos:
Sandro Bistene Turma 19-c */ 
