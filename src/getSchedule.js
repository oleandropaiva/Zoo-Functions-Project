const { hours, species } = require('../data/zoo_data');
const data = require('../data/zoo_data');

const days = Object.keys(hours);
const hora = Object.values(hours);

function animals(param) {
  const animal = data.species;
  return animal.find((element) => element.name === param).availability;
}
function dispon() {
  const funcionamento = {};
  for (let index = 0; index < days.length; index += 1) {
    funcionamento[days[index]] = {
      officeHour: `Open from ${hora[index].open}am until ${hora[index].close}pm`,
      exhibition: species.filter((elemento) => elemento.availability.includes(days[index]))
        .map((elem) => elem.name),
    };
  }
  funcionamento.Monday = {
    officeHour: 'CLOSED',
    exhibition: 'The zoo will be closed!',
  };
  return funcionamento;
}

function returnDay(day) {
  const dayAval = dispon();
  const objDestruc = { [day]: dayAval[day] };
  return objDestruc;
}

function getSchedule(scheduleTarget) {
  const dayValid = Object.keys(data.hours).includes(scheduleTarget);
  const animalValid = data.species.some((element) => element.name === scheduleTarget);
  if (dayValid) {
    return returnDay(scheduleTarget);
  }
  if (animalValid) {
    return animals(scheduleTarget);
  }
  return dispon();
}
console.table(getSchedule(''));
console.table(getSchedule('Friday'));
console.table(getSchedule('lions'));
console.table(getSchedule('Blaa'));
module.exports = getSchedule;

/* Recebi ajuda, na semana on track, dos alunos:
Sandro Bistene
Bruno Monteiro
Tiago Gerônimo */
