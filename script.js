'use strict';

let secretNumber = Math.floor(Math.random() * 20 + 1);

//document.querySelector('.number').textContent = secretNumber;

document.querySelector('.check').addEventListener('click', function () {
  // If the  player wins
  if (Number(document.querySelector('.guess').value) == secretNumber) {
    document.querySelector('body').style.backgroundColor = '#06b347'; //Green
    document.querySelector('.number').style.width = '30rem'; //Size 30
    updateMessage('๐Correct Number'); //Message update
    document.querySelector('.number').textContent = secretNumber;
    //highest score: Check if the highest score is less than current score and set the max value as highest score
    document.querySelector('.highscore').textContent =
      Number(document.querySelector('.highscore').textContent) <
      Number(document.querySelector('.score').textContent)
        ? document.querySelector('.score').textContent
        : document.querySelector('.highscore').textContent;
  }
  //If the number is to high
  else if (Number(document.querySelector('.guess').value) > secretNumber) {
    result('๐ Too High!');
  } else {
    //If the number is too low
    result('๐ Too Low');
  }

  if (Number(document.querySelector('.score').textContent == 0)) {
    updateMessage('Game Lost, please try again!');
    document.querySelector('body').style.backgroundColor = 'red';
  }
});

//Again/reset button event listener
document.querySelector('.again').addEventListener('click', function () {
  secretNumber = Math.floor(Math.random() * 20 + 1);
  document.querySelector('.between').textContent = '(Between 1 and 20)';
  reset();
  document.querySelector('.score').textContent = 20;
});

document.querySelector('.hard').addEventListener('click', function () {
  secretNumber = Math.floor(Math.random() * 50 + 1);
  document.querySelector('.between').textContent = '(Between 1 and 50)';
  reset();
  document.querySelector('.score').textContent = 10;
});

function reset() {
  document.querySelector('.guess').value = '';
  updateMessage('Start guessing...');
  document.querySelector('body').style.backgroundColor = '#222';
  document.querySelector('.number').style.width = '15rem';
  document.querySelector('.number').textContent = '?';
}

function result(message) {
  document.querySelector('.message').textContent = message;
  document.querySelector('body').style.backgroundColor = 'orange';
  if (Number(document.querySelector('.score').textContent > 0))
    document.querySelector('.score').textContent =
      Number(document.querySelector('.score').textContent) - 1;
}

function updateMessage(message) {
  document.querySelector('.message').textContent = message;
}
