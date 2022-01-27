'use strict';

let secretNumber = Math.trunc(Math.random() * 20) + 1;

let score = 20;
let highscore = 0;

document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);

  console.log(guess, typeof guess);

  //when there's no input
  if (!guess) {
    document.querySelector('.message').textContent = 'No number!';
    //when the player wins
  } else if (guess === secretNumber) {
    document.querySelector('.message').textContent = 'Correct number!';

    document.querySelector('.number').textContent = secretNumber;

    document.querySelector('body').style.backgroundColor = '#60b347';

    document.querySelector('.number').style.width = '30rem';

    if (score > highscore) {
      highscore = score;
      document.querySelector('.highscore').textContent = highscore;
      
    }
    // when guess is wwrong
  } else if (guess !== secretNumber) {
    if (score > 1) {
      document.querySelector('.message').textContent =
        guess > secretNumber ? 'Too high!' : 'Too low!';
      score--;
      document.querySelector('.score').textContent = score;
    } else {
      document.querySelector('.message').textContent = 'You lost the game!';
    }
  }
/*Refactoring these code above - to use ternary operator */
  //   //when gues is too high
  //   else if (guess > secretNumber) {
  //     // if (score > 1) {
  //     //   document.querySelector('.message').textContent = 'Too high!';
  //     //   score--;
  //     //   document.querySelector('.score').textContent = score;
  //     // } else {
  //     //   document.querySelector('.message').textContent = 'You lost the game!';
  //     // }
  //     //when guess is too low
  //   } else if (guess < secretNumber) {
  //     // if (score > 1) {
  //     //   document.querySelector('.message').textContent = 'Too low!';
  //     //   score--;
  //     //   document.querySelector('.score').textContent = score;
  //     // } else {
  //     //   document.querySelector('.message').textContent = 'You lost the game!';
  //     // }
  //   }
});
// action to reload page
document.querySelector('.again').addEventListener('click', function () {
  //   document.location.reload(true);

  score = 20;
  secretNumber = Math.trunc(Math.random() * 20) + 1;
  document.querySelector('.message').textContent = 'Start guessing...';
  document.querySelector('.score').textContent = score;
  document.querySelector('.number').textContent = '?';
  document.querySelector('.guess').value = '';
  document.querySelector('body').style.backgroundColor = '#222';

  document.querySelector('.number').style.width = '15rem';
});
