const calcDisplay = document.querySelector(".calcDisplay");
const digits = document.querySelectorAll(".digit");
const bAdd = document.querySelector(".add");
const bSubtract = document.querySelector(".subtract");
const bMultiply = document.querySelector(".multiply");
const bDivide = document.querySelector(".divide");
const bEquals = document.querySelector(".equals");
const bClear = document.querySelector(".clear");
const buttons = document.querySelectorAll(".operation");
const dot = document.querySelector(".dot");

function add(x, y) {
  return x + y;
}
function subtract(x, y) {
  return x - y;
}
function multiply(x, y) {
  return x * y;
}
function divide(x, y) {
  return x / y;
}

function operate(operator, firstNumber, secondNumber) {
  if (operator === bAdd.textContent) {
    return add(firstNumber, secondNumber);
  } else if (operator === bSubtract.textContent) {
    return subtract(firstNumber, secondNumber);
  } else if (operator === bMultiply.textContent) {
    return multiply(firstNumber, secondNumber);
  } else if (operator === bDivide.textContent) {
    return divide(firstNumber, secondNumber);
  }
}
let firstNumber = "";
let secondNumber = "";
let operator = "";
let result = "";
let displayValue = "";

function updateDisplay() {
  calcDisplay.textContent = displayValue;
}

function getFirstNumber() {
  firstNumber = Number(displayValue);
  console.log("First Number:", firstNumber);
}

function getSecondNumber() {
  secondNumber = Number(displayValue);
  console.log("Second Number:", secondNumber);
}

digits.forEach((digit) => {
  digit.addEventListener("click", () => {
    displayValue += digit.textContent;
    updateDisplay();
    if (!operator) {
      getFirstNumber();
    } else {
      getSecondNumber();
    }
  });
});

buttons.forEach((button) => {
  button.addEventListener("click", () => {
    displayValue = "";
    updateDisplay();

    if (firstNumber && secondNumber) {
      firstNumber = operate(
        operator,
        Number(firstNumber),
        Number(secondNumber)
      );
      console.log("Result(firstNumber):", firstNumber);

      calcDisplay.textContent = showResult();
    }
    calcDisplay.textContent = showResult();
    operator = button.textContent;
  });
});

bEquals.addEventListener("click", () => {
  displayValue = "";
  updateDisplay();
  if (firstNumber || (firstNumber == 0 && secondNumber)) {
    firstNumber = operate(operator, Number(firstNumber), Number(secondNumber));
  }
  console.log("Result(firstNumber):", firstNumber);
  calcDisplay.textContent = showResult();
  secondNumber = "";
});

bClear.addEventListener("click", () => {
  displayValue = "";
  updateDisplay();
  firstNumber = "";
  secondNumber = "";
  operator = "";
});

function showResult() {
  if (firstNumber.toString().length >= 16) {
    return firstNumber.toString().slice(0, 16);
  } else {
    return Number(firstNumber);
  }
}
