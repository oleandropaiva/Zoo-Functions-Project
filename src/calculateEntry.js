const data = require('../data/zoo_data');

const entrant = [
  { name: 'Lara Carvalho', age: 5 },
  { name: 'Frederico Moreira', age: 5 },
  { name: 'Pedro Henrique Carvalho', age: 5 },
  { name: 'Maria Costa', age: 18 },
  { name: 'Núbia Souza', age: 18 },
  { name: 'Carlos Nogueira', age: 50 },
];

function countEntrants(entrants) {
  if (!entrants) {
    return 0;
  }
  if (Object.keys(entrants).length === 0) {
    return 0;
  }
  const child = entrants.filter((element) => element.age < 18);
  const adult = entrants.filter((element) => element.age >= 18 && element.age < 50);
  const senior = entrants.filter((element) => element.age >= 50);
  return { adult: adult.length, child: child.length, senior: senior.length };
}
console.log(countEntrants(entrant));
function calculateEntry(entrants) {
  if (!entrants) {
    return 0;
  }
  if (Object.keys(entrants).length === 0) {
    return 0;
  }

  const visit = countEntrants(entrants);
  const childTotal = (visit.child * data.prices.child);
  const adultTotal = (visit.adult * data.prices.adult);
  const seniorTotal = (visit.senior * data.prices.senior);

  return childTotal + adultTotal + seniorTotal;
}

console.log(calculateEntry(entrant));
module.exports = { calculateEntry, countEntrants };

//Recebi ajuda do Sandro Bistene Turma 19-C