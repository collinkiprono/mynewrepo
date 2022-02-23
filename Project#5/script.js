'use strict';

// Data needed for a later exercise
const flights =
  '_Delayed_Departure;fao93766109;txl2133758440;11:25+_Arrival;bru0943384722;fao93766109;11:45+_Delayed_Arrival;hel7439299980;fao93766109;12:05+_Departure;fao93766109;lis2323639855;12:30';

// Data needed for first part of the section
const restaurant = {
  name: 'Classico Italiano',
  location: 'Via Angelo Tavanti 23, Firenze, Italy',
  categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
  starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
  mainMenu: ['Pizza', 'Pasta', 'Risotto'],
  openingHours: {
    thu: {
      open: 12,
      close: 22,
    },
    fri: {
      open: 11,
      close: 23,
    },
    sat: {
      open: 0, // Open 24 hours
      close: 24,
    },
  },
  order: function (starterIndex, mainIndex) {
    return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]];
  },
  orderDelivery: function ({ starterIndex, mainIndex, time, address }) {
    console.log(
      `Order recieved! ${this.starterMenu[starterIndex]} and ${this.mainMenu[mainIndex]} will be delivered to ${address} at ${time}`
    );
  },
};

restaurant.orderDelivery({
  time: '23:23',
  address: 'Via Season Rd',
  mainIndex: 2,
  starterIndex: 3,
});

const { name, openingHours, categories } = restaurant;
console.log(name, openingHours, categories);

const {
  name: restaurantName,
  openingHours: hours,
  categories: tags,
} = restaurant;
console.log(restaurantName, hours, tags);

const {
  fri: { open: o, close: c },
} = openingHours;
console.log(o, c);

const newMenu = [...restaurant.mainMenu, 'York', 'Eggs', 'Smokies'];
console.log(newMenu);

const mainMenuCopy = [...restaurant.mainMenu];
console.log(mainMenuCopy);
const menu = [...restaurant.starterMenu, ...restaurant.mainMenu];
console.log(menu);

const [pizza, , risotto, ...otherFood] = [
  ...restaurant.mainMenu,
  ...restaurant.starterMenu,
];
console.log(pizza, risotto, otherFood);

const { sat, ...weekdays } = restaurant.openingHours;
console.log(weekdays);

const menu1 = [...restaurant.starterMenu, ...restaurant.mainMenu];

const properties = Object.keys(openingHours);
console.log(properties);

let openStr = `We are open on ${properties.length} days `;

for (const day of properties) {
  openStr += `${day}, `;
}
console.log(openStr);

const game = {
  team1: 'Bayern Munich',
  team2: 'Borrussia Dortmund',
  players: [
    [
      'Neuer',
      'Pavard',
      'Martinez',
      'Alaba',
      'Davies',
      'Kimmich',
      'Goretzka',
      'Coman',
      'Muller',
      'Gnarby',
      'Lewandowski',
    ],
    [
      'Burki',
      'Schulz',
      'Hummels',
      'Akanji',
      'Hakimi',
      'Weigl',
      'Witsel',
      'Hazard',
      'Brandt',
      'Sancho',
      'Gotze',
    ],
  ],
  score: '4:0',
  scored: ['Lewandowski', 'Gnarby', 'Lewandowski', 'Hummels'],
  date: 'Nov 9th, 2037',
  odds: {
    team1: 1.33,
    x: 3.25,
    team2: 6.5,
  },
};

for (const [team, odd] of Object.entries(game.odds)) {
  const teamStr = team === 'x' ? 'draw' : `victory ${game[team]}`;
  console.log(team, odd);
  console.log(`${teamStr} ${odd}`);
}

// const orderSet = new Set([
// 'Pasta',
// 'Pizza',
// 'Rice'
// ]);
// console.log(orderSet);
// console.log(orderSet.size);
// console.log(orderSet.has('Pizza'));

// const staff = ['Waiter', 'Chef', 'Manager'];
// const staffUnique = [...new Set(staff)];
// console.log(staffUnique);
// console.log(staffUnique.length);

// const rest = new Map();
// rest.set('name', 'CJ');
// rest.set(1, 'Italy');
// rest.set(2, 'Kenya');
// console.log(rest);

// rest.set('categories', ['Italian', 'Pizzeria', 'Vegetarian', 'Organic']);

// console.log(rest.has('categories'));

const question = new Map([
  ['question', 'What is the best programming language?'],
  [1, 'C'],
  [2, 'Java'],
  [3, 'JavaScript'],
  ['correct', 3],
  [true, 'Corect'],
  [false, 'Try again!'],
]);
console.log(question);

for (const [key, value] of question) {
  if (typeof key === 'number') console.log(`Answer ${key}: ${value}`);
}

const gameEvents = new Map([
  [17, 'Goal'],
  [36, 'Subsitution'],
  [44, 'Yello Card'],
  [45, 'Hal Time'],
]);

const events = [...new Set(gameEvents.values())];
console.log(events);

const time = [...gameEvents.keys()].pop();
console.log(time);

for (const [min, event] of gameEvents) {
  console.log(`${min}: ${event}`);
}

document.body.append(document.createElement('textarea'));
document.body.append(document.createElement('button'));
const text = document.querySelector('textarea').value;

document.querySelector('button').addEventListener('click', function () {
  const text = document.querySelector('textarea').value;
  const rows = text.split('\n');
  
  for (const row of rows) {
    const [first, last] = row.toLocaleUpperCase().trim().split('_');
    console.log(row);
  }
});

const flight =
  '_Delayed_Departure;fao93766109;txl2133758440;11:25+_Arrival;bru0943384722;fao93766109;11:45+_Delayed_Arrival;hel7439299980;fao93766109;12:05+_Departure;fao93766109;lis2323639855;12:30';
const getCode = str => str.toUpperCase().slice(0,3);

for (const f of flight.split('+')) {
 const [type, from, to, time] =  f.split(';');
 const output = `${type.replaceAll('_', ' ')} ${getCode(from)} to ${getCode(to)} (${time.replace(':', 'h')})`;
 console.log(output);
}