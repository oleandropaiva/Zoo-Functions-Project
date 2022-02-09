const data = require('../data/zoo_data');

const getSpeciesByIds = (...id) => {
  const getSpecies = data.species;
  return getSpecies.filter((nameSpecies) => id.includes(nameSpecies.id));
};

module.exports = getSpeciesByIds;

/* 1. Implemente a função getSpeciesByIds
Esta função é responsável pela busca das espécies de animais por id. Ela retorna um array contendo as espécies referentes aos ids passados como parâmetro, podendo receber um ou mais ids.
Observações técnicas
O parâmetro desta função pode ser alterado para atender ao requisito proposto.
O que será avaliado
Caso receba nenhum parâmetro, necessário retornar um array vazio;
Ao receber como parâmetro um único id, retorna um array com a espécie referente à esse id;
Ao receber mais de um id, retorna um array com as espécies referentes aos ids.
 */

/* { id }destruction. trás a informação que está dentro das chaves */
/* O método filter() cria um novo array com todos os elementos que passaram no teste implementado pela função fornecida. */
