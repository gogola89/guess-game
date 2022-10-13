'use strict';

let points = 20;
let cumPoints = 0;
let highestPoints = 0;
let secretNumber = Math.floor(Math.random() * 20) + 1;


const head = document.querySelector('.head');
const number = document.querySelector('.number');
const highscore = document.querySelector('.highscore');
const cumscore = document.querySelector('.cumscore');
const body = document.querySelector('body');
const again = document.querySelector('.again');
const check = document.querySelector('.check');
const guess = document.querySelector('.guess');
const message = document.querySelector('.message');
const score = document.querySelector('.score');

again.disabled = true;

const displayMessage = message => {
  message.textContent = message;
};

check.addEventListener('click', function () {
  const guessNumber = Number(guess.value);

  // When the guess is below 1 or no input
  if (guessNumber < 1) {
    displayMessage('Enter number greater than 0!');
  }
  // When the guess exceeds 20
  else if (guessNumber > 20) {
    displayMessage('Number should not exceed 20!');
  }

  // When the guess is right
  else if (guessNumber === secretNumber) {
    cumPoints += points;
    if (points > highestPoints) highestPoints = points;
    displayMessage('💥 Correct Number!');
    head.textContent = 'You Won!';
    number.textContent = secretNumber;
    highscore.textContent = highestPoints;
    cumscore.textContent = cumPoints;
    body.style.backgroundColor = '#60b347';
    number.style.width = '30rem';
    again.disabled = false;
    check.disabled = true;
    guess.disabled = true;
  }
  // When the guess is wrong
  else if (guessNumber !== secretNumber) {
    if (points > 1) {
      displayMessage(guessNumber < secretNumber ? '↙️ Too low!' : '↗️ Too high!');
      points--;
      score.textContent = points;
    } else {
      displayMessage('⚠️ You lost!');
      score.textContent = 0;
    }
  }
});
// When you restart the game
document.querySelector('.again').addEventListener('click', function () {
  points = 20;
  secretNumber = Math.floor(Math.random() * 20) + 1;
  again.disabled = true;
  check.disabled = false;
  guess.disabled = false;
  body.style.backgroundColor = '#222';
  head.textContent = 'Guess My Number!';
  number.textContent = '?';
  guess.value = '';
  displayMessage('Start guessing...');
  score.textContent = points;
  highscore.textContent = highestPoints;
  number.style.width = '15rem';
});
