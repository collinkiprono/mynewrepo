/* Activate strict mode */
'use strict';

function cutFruit (fruit){
    return fruit * 2;
}

function fruitProcessor (apples, oranges){
    let applePieces = cutFruit(apples);
    let orangePieces = cutFruit(oranges);

    let juice = `Juice with ${applePieces} apples and ${orangePieces} oranges`;
    return juice;
}
 console.log(fruitProcessor(4,15));

 /* Calculate your age */

 function calcAge1(birthYear){
     let today = new Date();
     let year = today.getFullYear();

     const age = year - birthYear;

     return age;
 }
 console.log(calcAge1(1994) + " years old"); /* Invoke the function */

 /* Arrow functions */

 const yearToRetire = (birthYear, firstName) => {
    let today = new Date();
    const age = today.getFullYear() - birthYear;

    const toRetire = 65 - age;
    
    if(toRetire > 0){
        console.log(`${firstName} retires in ${toRetire} years`);
        return toRetire;
    }else{
        console.log(`${firstName} has already retired`);
        return -1;
    }

 }
 console.log(yearToRetire(1998, 'Collins'));

/* Tip Calculator practice */

let tip = 0.15;
let bill = 430;

if (bill > 50 && bill <= 300){
    tip = tip * bill;
    console.log( `The bill was ${bill}, the tip was ${tip}, and the total is ${tip + bill}`);
}else if(bill > 300){
    tip = 0.2 * bill;
    console.log( `The bill was ${bill}, the tip was ${tip}, and the total is ${tip + bill}`);
}else{
    console.log('Your bill was less than 50');
}

/* Coding challenge #1 */

let theDolphins = [44, 23, 71];
let theKoalas = [65, 54, 49];

    let sumDolphins = theDolphins.reduce((a,b) => a + b, 0 );
    // let avgDolphins = sumDolphins / theDolphins.length;
    let sumKoalas = theKoalas.reduce((a,b) => a + b, 0 );
    // let avgKoalas = sumKoalas / theKoalas.length;

    function checkWinner(avgDolphins, avgKoalas ){
        if (avgDolphins > avgKoalas){
            return `Dolphins win (${avgDolphins} vs ${avgKoalas})`;
        }else if(avgKoalas > avgDolphins){
            return `Koalas win (${avgKoalas} vs ${avgDolphins})`;
        }else{
            return 'Cannot find a winner'
        }
       
    }
    console.log(checkWinner((sumDolphins / theDolphins.length), (sumKoalas / theKoalas.length)));



