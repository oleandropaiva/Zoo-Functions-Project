const data = require('../data/zoo_data');

function countAnimals(animal) {
  if (!animal) {
    const objAnimal = {};
    data.species.forEach((element) => { objAnimal[element.name] = element.residents.length; });
    return objAnimal;
  }
  if (Object.values(animal).length === 1) {
    const [valorSpecie] = Object.values(animal);
    const qtdAnimal = data.species.find((element) => element.name === valorSpecie);
    return qtdAnimal.residents.length;
  }
  if (Object.values(animal).length === 2) {
    const [valorSpecie] = Object.values(animal);
    const qtdAnimal = data.species.find((element) => element.name === valorSpecie);
    const sexAnimal = qtdAnimal.residents.filter((element) => element.sex === animal.sex);
    return sexAnimal.length;
  }
}

module.exports = countAnimals;

/* Recebi ajuda do Sandro Bistene Turma 19-C */
