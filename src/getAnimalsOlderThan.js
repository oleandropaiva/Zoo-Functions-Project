/* const { species } = require('../data/zoo_data'); */

const data = require('../data/zoo_data');

const { species } = data;

/* recebi ajuda do Luis Pastana Tribo B na semana ON TRACK
 */
function getAnimalsOlderThan(animal, age1) {
  const animals = species.find((specie) => specie.name === animal);
  return animals.residents.every((resident) => resident.age > age1);
}

module.exports = getAnimalsOlderThan;

/* { id }destruction. trás a informação que está dentro das chaves  */

/*  2. Implemente a função getAnimalsOlderThan
Esta função, a partir do nome de uma espécie e uma idade mínima, verifica se todos os animais daquela espécie possuem a idade mínima especificada.

Observações técnicas

Deve retornar um valor booleano.
O que será avaliado

Ao passar o nome de uma espécie e uma idade, testa se todos os animais desta espécie possuem a idade mínima especificada. */
