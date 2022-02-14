/* const { species } = require('../data/zoo_data'); */
const data = require('../data/zoo_data');

function getOldestFromFirstSpecies(id) {
  const employeeID = data.employees.find((obj) => obj.id === id).responsibleFor[0];
  const animalName = data.species.find((element) => element.id === employeeID);
  let ageMax = animalName.residents[0];
  animalName.residents.forEach((element) => {
    if (element.age > ageMax.age) {
      ageMax = element;
    }
  });
  return Object.values(ageMax);
}

console.log(getOldestFromFirstSpecies('fdb2543b-5662-46a7-badc-93d960fdc0a8'));

module.exports = getOldestFromFirstSpecies;

/* Recebi ajuda, na semana on track, dos alunos:
Sandro Bistene Turma 19-c na semana OnTrack */
