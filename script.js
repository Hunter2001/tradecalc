'use strict';

const deposit = document.querySelector('.deposit');
const risk = document.querySelector('.risk');
const stop = document.querySelector('.stop');
const button = document.querySelector('.calculate');
const output = document.querySelector('.output');
const clipboard = document.querySelector('.clipboard');

button.addEventListener('click', function (e) {
  e.preventDefault();
  const deposit2 = +deposit.value;
  const risk2 = +risk.value;
  const stop2 = +stop.value;
  let output2 = (deposit2 * (risk2 / 100)) / (stop2 / 100);
  output2 = output2 - output2 * 0.06;
  const output3 = Math.trunc(output2);
  output.textContent = output3;
  output.style.opacity = 1.0;
  // clipboard
  navigator.clipboard.writeText(output3);
  clipboard.style.opacity = 1.0;
});
