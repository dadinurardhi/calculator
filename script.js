$(document).ready(() => {
  let prevNumber = '';
  let calculationOperator = '';
  let currentNumber = '0';

  const updateScreen = (number) => {
    console.log(number);
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

/*
// const numbers = document.querySelectorAll(".number")

// numbers.forEach ((number) => {
//     number.addEventListener("click", (event) => {
//         console.log(event.target.value)
//     })
// })

// const calculatorScreen = document.querySelector('.calculator-screen')

// const updateScreen = (number) => {
//     calculatorScreen.value = number
// }

// const number = document.querySelectorAll(".number")

// number.forEach((number) => {
//     number.addEventListener("click", (event) => {
//         updateScreen(event.target.value)
//     })
// })

// let prevNumber = ''
// let calculationOperator = ''
// let currentNumber = '0'

// const inputNumber = (number) => {
//     if (currentNumber === '0') {
//         currentNumber = number
//     } else {
//         currentNumber += number
//     }
// }

// numbers.forEach((number) => {
//     number.addEventListener("click", (event) => {
//         inputNumber(event.target.value)
//         updateScreen(currentNumber)
//     })
// })

// const operators = document.querySelectorAll(".operator")

// operators.forEach((operator) => {
//     operator.addEventListener("click", (event) => {
//         inputOperator(event.target.value)
//     })
// })

// const inputOperator = (operator) => {
//     if (calculationOperator === '') {
//         prevNumber = currentNumber
//     }
//     calculationOperator = operator
//     currentNumber = ''
// }

// const equalSign = document.querySelector('.equal-sign')

// equalSign.addEventListener('click', () => {
//     calculate()
//     updateScreen(currentNumber)
// })

// const calculate = () => {
//     let result = ''
//     switch(calculationOperator) {
//         case "+":
//             result = parseFloat (prevNumber) + parseFloat (currentNumber)
//             break
//         case "-":
//             result = parseFloat (prevNumber) - parseFloat (currentNumber)
//             break
//         case "*":
//             result = parseFloat (prevNumber) * parseFloat (currentNumber)
//             break
//         case "/":
//             result = parseFloat (prevNumber) / parseFloat (currentNumber)
//             break
//         default:
//             break
//     }
//     currentNumber = result
//     calculationOperator = ''
// }

// const clearAll = () => {
//     prevNumber = ''
//     calculationOperator = ''
//     currentNumber = '0'
// }

// const clearBtn = document.querySelector('.all-clear')

// clearBtn.addEventListener ('click', () => {
//     clearAll()
//     updateScreen(currentNumber)
// })

const decimal = document.querySelector('.decimal')

inputDecimal = (dot) => {
    if (currentNumber.includes('.')) {
        return
    }
    currentNumber += dot
}

decimal.addEventListener('click', (event) => {
    inputDecimal(event.target.value)
    updateScreen(currentNumber)
})

*/
