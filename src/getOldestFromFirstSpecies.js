const { species } = require('../data/zoo_data');
const data = require('../data/zoo_data');

function getOldestFromFirstSpecies(id) {
  const func = data.employees.find((obj) => obj.id === id);
  const animal = func.responsibleFor[0];
  const test = species.find((element) => {})
}

module.exports = getOldestFromFirstSpecies;
