const data = require('../data/zoo_data');

function numOfEntrants(entrants) {
  const visitors = { child: 0, adult: 0, senior: 0 };

  entrants.forEach((element) => {
    if (element.age < 18) visitors.child += 1;
    else if (element.age >= 18 && element.age < 50) visitors.adult += 1;
    else if (element.age >= 50) visitors.senior += 1;
  });
  return visitors;
}

function countEntrants(entrants) {
  if (!entrants || !entrants.length) {
    return 0;
  }
  return numOfEntrants(entrants);
}

function calculateEntry(entrants) {
  if (!countEntrants(entrants)) {
    return countEntrants(entrants);
  }
  const visitors = countEntrants(entrants);
  const pay =
    data.prices.child * visitors.child +
    data.prices.adult * visitors.adult +
    data.prices.senior * visitors.senior;
  return pay;
}

module.exports = { calculateEntry, countEntrants };
