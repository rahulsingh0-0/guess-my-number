'use strict';
let secretNumber = Math.trunc(Math.random() * 20 + 1);
let score = 20;

document.querySelector('.check').addEventListener('click', function () {
  const x = Number(document.querySelector('.guess').value);
  if (!x) {
    document.querySelector('.message').textContent =
      'Enter Number between 1 and 20!';
  } else if (x > 20) {
    document.querySelector('.message').textContent =
      'Enter Number between 1 and 20!';
  } else if (x === secretNumber) {
    document.querySelector('body').style.backgroundColor = '#60b347';
    document.querySelector('.message').textContent = 'YEa!It matched 🎉';
    document.querySelector('.number').textContent = secretNumber;
    document.querySelector('.highscore').textContent = score;
  } else if (x > secretNumber) {
    document.querySelector('.message').textContent = 'Too High! 😯';
    document.querySelector('.score').textContent = score--;
    document.querySelector('.score').textContent = score;
  } else if (x < secretNumber) {
    document.querySelector('.message').textContent = 'Too Low! 😑';
    document.querySelector('.score').textContent = score--;
    document.querySelector('.score').textContent = score;
  }
});

document.querySelector('.again').addEventListener('click', function () {
  document.querySelector('.score').textContent = 20;
  document.querySelector('.guess').value = ' ';
  document.querySelector('body').style.backgroundColor = '#222';
  document.querySelector('.message').textContent = 'start guessing';
  document.querySelector('.number').textContent = '?';
  document.querySelector('.number').style.Width = '15rem';
});
