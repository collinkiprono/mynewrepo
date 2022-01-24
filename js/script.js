/* Activate strict mode */
'use strict';

function cutFruit(fruit) {
  return fruit * 2;
}

function fruitProcessor(apples, oranges) {
  let applePieces = cutFruit(apples);
  let orangePieces = cutFruit(oranges);

  let juice = `Juice with ${applePieces} apples and ${orangePieces} oranges`;
  return juice;
}
console.log(fruitProcessor(4, 15));

/* Calculate your age */

function calcAge1(birthYear) {
  let today = new Date();
  let year = today.getFullYear();

  const age = year - birthYear;

  return age;
}
console.log(calcAge1(1994) + ' years old'); /* Invoke the function */

/* Arrow functions */

const yearToRetire = (birthYear, firstName) => {
  let today = new Date();
  const age = today.getFullYear() - birthYear;

  const toRetire = 65 - age;

  if (toRetire > 0) {
    console.log(`${firstName} retires in ${toRetire} years`);
    return toRetire;
  } else {
    console.log(`${firstName} has already retired`);
    return -1;
  }
};
console.log(yearToRetire(1998, 'Collins'));

/* Tip Calculator practice */

let tip = 0.15;
let bill = 430;

if (bill > 50 && bill <= 300) {
  tip = tip * bill;
  console.log(
    `The bill was ${bill}, the tip was ${tip}, and the total is ${tip + bill}`
  );
} else if (bill > 300) {
  tip = 0.2 * bill;
  console.log(
    `The bill was ${bill}, the tip was ${tip}, and the total is ${tip + bill}`
  );
} else {
  console.log('Your bill was less than 50');
}

/* Coding challenge - Functions #1 */

const calcAverage = (a, b, c) => (a + b + c) / calcAverage.length;

let scoreDolphins = calcAverage(85, 54, 41);
let scoreKoalas = calcAverage(23, 34, 27);

function checkWinner(avgDolphins, avgKoalas) {
  if (avgDolphins >= 2 * avgKoalas) {
    return `Dolphins win (${avgDolphins} vs ${avgKoalas})`;
  } else if (avgKoalas >= 2 * avgDolphins) {
    return `Koalas win (${avgKoalas} vs ${avgDolphins})`;
  } else {
    return 'Cannot find a winner';
  }
}

console.log(checkWinner(scoreDolphins, scoreKoalas));

/* Coding challenge #2 */

function calcTip(bill) {
  if (bill >= 50 && bill <= 300) {
    let tip = bill * 0.15;
    return `Your bill is $${bill} and tip is $${tip}, therefore the total is $${
      bill + tip
    }`;
  } else {
    tip = bill * 0.2;
    return `Your bill is $${bill} and tip is $${tip}, therefore the total is $${
      bill + tip
    }`;
  }
}
console.log(calcTip(600));

/* Loop through an array */

let bills = [125, 555, 44];
let tips = [0.15, 0.2];

let calcTotal = bills.forEach(function (bill) {
  if (bill >= 50 && bill <= 300) {
    console.log(`Your tip is ${bill * tips[0]}`);
  } else {
    console.log(`Your tip is ${bill * tips[1]}`);
  }
});

/* Replace HTML elements using the DOM - Javascript */

// document.addEventListener("DOMContentLoaded", function(event){
//     function replacePare(){
//         let cartSrt = document.getElementsByClassName('product-name')[0].querySelector('a').innerHTML;
//         console.log(cartSrt);
//         let newSrt = cartSrt.toString().replaceAll('(','').replaceAll(')','');

//         document.getElementsByClassName('product-name')[0].querySelector('a').innerHTML = newSrt;
//     }
//     console.log(replacePare());
//     replacePare();
// });

document.addEventListener('DOMContentLoaded', function (event) {
  function replacePare() {
    let cartSrts = document.getElementsByClassName('product-name');

    for (let i = 0; i < cartSrts.length; i++) {
      const link = cartSrts[i].querySelector('a');
      link.innerHTML = link.innerHTML
        .toString()
        .replaceAll('(', '')
        .replaceAll(')', '');

      // console.log(("the updated link is ", link))
    }
    // cartSrts = Array.from(cartSrts);

    // cartSrts.forEach(function(row){
    //     row = row.querySelector('a');  /// Samaki
    //     row.innerHTML = row.innerHTML.toString().replaceAll('(','').replaceAll(')','');
    //     // console.log(row);

    // });
  }

  replacePare();
});

/* Objects */

const jonas = {
  firstName: 'Jonas',
  lastName: 'Doe',
  birthYear: 1994,
  job: 'Teacher',
  friends: ['Michael', 'James', 'Joy'],
  drivingLicense: false,

  // jonasAge: function(birthYear){
  //     return 2022 - birthYear;
  // }
  jonasAge: function () {
    return 2022 - this.birthYear;
  },
};

console.log(jonas);

//const interestedIn = prompt('What do you want to know about Jonas? Choose between firstName, lastName, age, job and friends');

// if(jonas[interestedIn]){
//     console.log(jonas[interestedIn]);
// }else{
//     console.log("The value doesn't exist");
// }

jonas.location = 'Portugal';
jonas['twitter'] = '@jonas';
console.log(jonas);

console.log(
  `${jonas.firstName} has ${jonas.friends.length} friends and his best friend is ${jonas.friends[0]}`
);

console.log(jonas.jonasAge());

console.log(
  `Jonas is a ${jonas.jonasAge()} old ${jonas.job}, and has ${
    jonas.drivingLicense ? 'a' : 'no'
  } driver's license`
);

const mark = {
  fullName: 'Mark Joe',
  mass: 78,
  height: 1.69,

  calcBMI: function () {
    this.bmi = this.mass / this.height ** 2;
    return this.bmi;
  },
};
const john = {
  fullName: 'John Joe',
  mass: 92,
  height: 1.95,

  calcBMI: function () {
    this.bmi = this.mass / this.height ** 2;
    return this.bmi;
  },
};
john.calcBMI();
mark.calcBMI();

if (mark.bmi > john.bmi) {
  console.log(
    `${mark.fullName}'s BMI (${mark.bmi}) is higher than ${john.fullName}'s BMI (${john.bmi})!`
  );
} else if (john.bmi > mark.bmi) {
  console.log(
    `${john.fullName}'s BMI (${john.bmi}) is higher than ${mark.fullName}'s BMI (${mark.bmi})!`
  );
}

/* Iteration - loop */

// for (let rep = 0; rep < array.length; rep++) {
//     const element = array[rep];

// }

for (let n = 1; n <= 10; n++) {
  console.log(`Lifting weights repetition ${n}`);
}

const profile = ['Jonas', 'Doe', 1994, 'Teacher', 'Famer', 'Married', true];
const types = [];

for (let i = 0; i < profile.length; i++) {
  // Reading from an array
  const element = profile[i];
  console.log(element);
  // Filling an array
  // types[i] = typeof profile[i];
  types.push(typeof profile[i]);
}
console.log(types);

const births = [1991, 1992, 1993, 1994, 1995];
const age = [];

for (let i = 0; i < births.length; i++) {
  const element = births[i];
  console.log(element);

  age.push(2022 - element);
}
console.log(age);

const details = ['Jonas', 'Doe', 1994, 'Teacher', 'Famer', 'Married', true];

for (let i = details.length - 1; i >= 0; i--) {
  const element = details[i];
  console.log(i, element);
}

/* Loop within another loop - array */

for (let exercise = 1; exercise <= 3; exercise++) {
  console.log(`----Starting workout ${exercise} ---`);

  for (let rep = 1; rep < 6; rep++) {
    console.log(`Lifting weights ${rep}`);
  }
}

/* While loop - when not certain how many iterations you expect */

let dice = Math.trunc(Math.random() * 6) + 1;

while (dice !== 6) {
  console.log(`You rolled dice ${dice}`);
  dice = Math.trunc(Math.random() * 6) + 1;

  if (dice === 6) console.log('Loop is about to end');
}

/* Coding challende #4 */

const calcTips = function (bill) {
  return bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.2;
};

let testBills = [22, 295, 176, 440, 37, 105, 10, 1100, 86, 52];

let testTips = [];
let totals = [];

for (let i = 0; i < testBills.length; i++) {
  const element = testBills[i];

  const tip = calcTips(testBills[i]);
  testTips.push(tip);
  totals.push(tip + testBills[i]);
}
console.log(testBills, testTips, totals);

let x = 24;
if (x === 23) {
  console.log(true);
} else {
  console.log(false);
}

/* Get the max and min values in an array to calculate temp amplitude */

const tempratures = [3, -2, -6, -1, 'error', 9, 13, 17, 15, 14, 9, 5];

const calcTempAmplitude = function (temps) {
  let max = temps[0];
  let min = temps[0];

  for (let i = 0; i < temps.length; i++) {
    const curTemp = temps[i];
    if (typeof curTemp !== 'number') continue;

    if (curTemp > max) max = curTemp;

    if (curTemp < min) min = curTemp;
  }
  // console.log(max, min);
  return max - min;
};

const amplitude = calcTempAmplitude(tempratures);
console.log(amplitude);

/* Merge 2 arrays */

const calcTempAmplitudeNew = function (t1, t2) {
  const temps = t1.concat(t2);
  // console.log(temps);

  let max = temps[0];
  let min = temps[0];

  for (let i = 0; i < temps.length; i++) {
    const curTemp = temps[i];
    if (typeof curTemp !== 'number') continue;

    if (curTemp > max) max = curTemp;

    if (curTemp < min) min = curTemp;
  }
  // console.log(max, min);
  return max - min;
};

const amplitude2 = calcTempAmplitudeNew([3, 5, 1], [9, 0, 5]);
console.log(amplitude2);

/* Challenge #5 */

const printForecast = function (arr) {
  let element = '';
  for (let i = 0; i < arr.length; i++) {
    element = element + `${arr[i]}°C in ${i + 1} days ... `;
    //console.log(`${element}°C in ${arr.indexOf(element) + 1} days ...`);
  }
  console.log(element);
};

printForecast([12, 5, -5, 0, 4]);
