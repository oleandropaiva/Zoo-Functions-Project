const { hours } = require('../data/zoo_data');
const data = require('../data/zoo_data');

function animals(param) {
  const animal = data.species;
  return animal.find((element) => element.name === param).availability;
}
function dispon() {
  const hour = data.hours;
  const sem = Object.keys(hour);
  sem.forEach((element) => {
    const turno = hour[element];
    if (element === 'Monday') {
      hour[element] = {
        officeHour: 'CLOSED',
        exhibition: 'The zoo will be closed!',
      };
    } else {
      hour[element] = {
        officeHour: `Open From ${turno.open}am until ${turno.close}pm`,
        exhibition: data.species.filter((elemento) => elemento.availability.includes(element))
          .map((elem) => elem.name),
      };
    }
  });
  return hour;
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
console.log(getSchedule(''));
module.exports = getSchedule;
