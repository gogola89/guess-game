'use strict';

let score = 20;
let cumScore = 0;
let highScore = 0;
let secretNumber = Math.floor(Math.random() * 20) + 1;

document.querySelector('.again').disabled = true;

const displayMessage = message => {
  document.querySelector('.message').textContent = message;
};

document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);

  // When the guess is below 1 or no input
  if (guess < 1) {
    displayMessage('Enter number greater than 0!');
  }
  // When the guess exceeds 20
  else if (guess > 20) {
    displayMessage('Number should not exceed 20!');
  }

  // When the guess is right
  else if (guess === secretNumber) {
    cumScore += score;
    if (score > highScore) highScore = score;
    displayMessage('💥 Correct Number!');
    document.querySelector('.head').textContent = 'You Won!';
    document.querySelector('.number').textContent = secretNumber;
    document.querySelector('.highscore').textContent = highScore;
    document.querySelector('.cumscore').textContent = cumScore;
    document.querySelector('body').style.backgroundColor = '#60b347';
    document.querySelector('.number').style.width = '30rem';
    document.querySelector('.again').disabled = false;
    document.querySelector('.check').disabled = true;
    document.querySelector('.guess').disabled = true;
  }
  // When the guess is wrong
  else if (guess !== secretNumber) {
    if (score > 1) {
      displayMessage(guess < secretNumber ? '↙️ Too low!' : '↗️ Too high!');
      score--;
      document.querySelector('.score').textContent = score;
    } else {
      displayMessage('⚠️ You lost!');
      document.querySelector('.score').textContent = 0;
    }
  }
});
// When you restart the game
document.querySelector('.again').addEventListener('click', function () {
  score = 20;
  secretNumber = Math.floor(Math.random() * 20) + 1;
  document.querySelector('.again').disabled = true;
  document.querySelector('.check').disabled = false;
  document.querySelector('.guess').disabled = false;
  document.querySelector('body').style.backgroundColor = '#222';
  document.querySelector('.head').textContent = 'Guess My Number!';
  document.querySelector('.number').textContent = '?';
  document.querySelector('.guess').value = '';
  displayMessage('Start guessing...');
  document.querySelector('.score').textContent = score;
  document.querySelector('.highscore').textContent = highestScore;
  document.querySelector('.number').style.width = '15rem';
});
