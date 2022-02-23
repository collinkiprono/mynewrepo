'use strict';

// function calcAge(birthYear) {
//   const age = 2037 - birthYear;

//   function printAge() {
//     const output = `${firstName}, you are ${age}, born in ${birthYear}`;
//     console.log(output);

//     if (birthYear >= 1981 && birthYear <= 1996) {
//       const firstName = 'Collins';
//       const str = `Oh! You are a millenial ${firstName}`;
//       console.log(str);
//       function add(a, b) {
//         return a + b;
//       }
//     }
//   }
//   printAge();
//   return age;
// }

// const firstName = 'Jonas';
// calcAge(1991);

// const jonas = {
//   firstName: 'Jonas',
//   year: 1994,
//   age: function () {
//     console.log(this);
//     console.log(2022 - this.year);
//     const isMillenial = function () {
//       console.log(this.year >= 1981 && this.year <= 1996);
//     };
//   },
//   greet: () => {
//     console.log(this);
//     console.log(`Hey ${this.firstName}`);
//   },
// };
// jonas.greet();
// jonas.age();

// let lastName = 'Williams';
// let oldName = lastName;
// lastName = 'Davis';

// console.log(lastName, oldName);

const jessica2 = {
  name: 'Jessica',
  last: 'Williams',
  age: 27,
};
// const married = jessica;
// married.last = 'Davis';

const jessicaCopy = Object.assign({}, jessica2);

// console.log('After : ', married);
console.log('Before : ', jessicaCopy);
