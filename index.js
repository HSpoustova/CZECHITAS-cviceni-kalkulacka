const klavesnice = document.querySelector('.keypad');
const display = document.querySelector('.display');

const handleDigitClick = (event) => {
  const digit = event.target.textContent;

  if (display.textContent == '0') {
    display.textContent = digit;
  } else if (display.textContent.length < 9) {
    display.textContent += digit;
  }
};

const btn1 = document
  .querySelector('#btn-1')
  .addEventListener('click', handleDigitClick);
const btn2 = document
  .querySelector('#btn-2')
  .addEventListener('click', handleDigitClick);
const btn3 = document
  .querySelector('#btn-3')
  .addEventListener('click', handleDigitClick);
const btn4 = document
  .querySelector('#btn-4')
  .addEventListener('click', handleDigitClick);
const btn5 = document
  .querySelector('#btn-5')
  .addEventListener('click', handleDigitClick);
const btn6 = document
  .querySelector('#btn-6')
  .addEventListener('click', handleDigitClick);
const btn7 = document
  .querySelector('#btn-7')
  .addEventListener('click', handleDigitClick);
const btn8 = document
  .querySelector('#btn-8')
  .addEventListener('click', handleDigitClick);
const btn9 = document
  .querySelector('#btn-9')
  .addEventListener('click', handleDigitClick);
const btn0 = document
  .querySelector('#btn-0')
  .addEventListener('click', handleDigitClick);
