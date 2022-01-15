const { database } = require('faker');
const { hours, species } = require('../data/zoo_data');

const monday = {
  Monday: { officeHour: 'CLOSED', exhibition: 'The zoo will be closed!' },
};

function getAnimals(scheduleTarget) {
  const specie = [];
  species.forEach((animal) => {
    if (animal.availability.some((available) => available === scheduleTarget)) {
      specie.push(animal.name);
    }
  });
  return specie;
}

function getDays() {
  let day;
  const days = {};
  Object.entries(hours).forEach((currentDay) => {
    day = {
      [currentDay[0]]: {
        officeHour: `Open from ${currentDay[1].open}am until ${currentDay[1].close}pm`,
        exhibition: getAnimals(currentDay[0]),
      },
    };
    Object.assign(days, day);
  });
  days.Monday = { officeHour: 'CLOSED', exhibition: 'The zoo will be closed!' };
  return days;
}

function getSchedule(scheduleTarget) {
  if (scheduleTarget === 'Monday') return monday;

  if (species.find((animal) => animal.name === scheduleTarget)) {
    return species.find((animal) => animal.name === scheduleTarget).availability;
  }

  if (Object.keys(hours).find((day) => day === scheduleTarget)) {
    return { [scheduleTarget]: getDays()[scheduleTarget] };
  }

  return getDays();
}

// console.log(hours);
// console.log(getSchedule('Tuesday'));
// console.log(getSchedule('lions'));

module.exports = getSchedule;
