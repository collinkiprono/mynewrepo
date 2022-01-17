/* Tip Calculator practice */

let tip = 0.15;
let bill = 430;


if (bill > 50 && bill <= 300){
    tip = tip * bill;
    total = tip + bill;
    console.log( `The bill was ${bill}, the tip was ${tip}, and the total is ${total}`);
}else if(bill > 300){
    tip = 0.2 * bill;
    total = tip + bill;
    console.log( `The bill was ${bill}, the tip was ${tip}, and the total is ${total}`);
}else{
    console.log('Your bill was less than 50');
}


