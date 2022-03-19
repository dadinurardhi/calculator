$(document).ready(() => {
  let prevNumber = '';
  let calculationOperator = '';
  let currentNumber = '0';

  const updateScreen = (number) => {
    $('.calculator-screen').attr({ value: number });
  };

  const inputNumber = (number) => {
    if (currentNumber === '0') {
      currentNumber = number;
    } else {
      currentNumber += number;
    }
  };

  const inputOperator = (operator) => {
    if (calculationOperator === '') {
      prevNumber = currentNumber;
    }
    calculationOperator = operator;
    currentNumber = '';
  };

  const calculate = () => {
    let result = '';
    switch (calculationOperator) {
      case '+':
        result = parseFloat(prevNumber) + parseFloat(currentNumber);
        break;
      case '-':
        result = parseFloat(prevNumber) - parseFloat(currentNumber);
        break;
      case '*':
        result = parseFloat(prevNumber) * parseFloat(currentNumber);
        break;
      case '/':
        result = parseFloat(prevNumber) / parseFloat(currentNumber);
        break;
      default:
        break;
    }
    currentNumber = result;
    calculationOperator = '';
  };

  const clearAll = () => {
    prevNumber = '';
    calculationOperator = '';
    currentNumber = '0';
  };

  const inputDecimal = (dot) => {
    if (currentNumber.includes('.')) {
      return;
    }
    currentNumber += dot;
  };

  $('.number').click((e) => {
    inputNumber(e.target.value);
    updateScreen(currentNumber);
  });

  $('.operator').click((e) => {
    inputOperator(e.target.value);
    updateScreen(currentNumber);
  });

  $('.percentage').click((e) => {
    updateScreen((parseFloat(prevNumber) * parseFloat(currentNumber)) / 100);
  });

  $('.equal-sign').click(() => {
    calculate();
    updateScreen(currentNumber);
  });

  $('.all-clear').click(() => {
    clearAll();
    updateScreen(currentNumber);
  });

  $('.decimal').click((e) => {
    inputDecimal(e.target.value);
    updateScreen(currentNumber);
  });
});
