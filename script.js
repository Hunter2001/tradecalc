'use strict';

const deposit = document.querySelector('.deposit');
const risk = document.querySelector('.risk');
const stop = document.querySelector('.stop');
const button = document.querySelector('.calculate');
const output = document.querySelector('.output');

button.addEventListener('click', function (e) {
  e.preventDefault();
  const deposit2 = +deposit.value;
  const risk2 = +risk.value;
  const stop2 = +stop.value;
  let output2 = Math.trunc((deposit2 * (risk2 / 100)) / (stop2 / 100));
  output2 = output2 - output2 * 0.06;
  output.textContent = output2;
  output.style.opacity = 1.0;
});
