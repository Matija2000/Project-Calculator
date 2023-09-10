const calcDisplay = document.querySelector(".calcDisplay");
const digits = document.querySelectorAll(".digit");
const bAdd = document.querySelector(".add");
const bSubtract = document.querySelector(".subtract");
const bMultiply = document.querySelector(".multiply");
const bDivide = document.querySelector(".divide");
const bEquals = document.querySelector(".equals");
const bClear = document.querySelector(".clear");
const buttons = document.querySelectorAll(".operation");

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

function calculatorOperation(firstNumber, z, secondNumber) {
  let x = firstNumber;
  let operator = z;
  let y = secondNumber;
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
  firstNumber = displayValue;
}

function getSecondNumber() {
  secondNumber = displayValue;
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
      firstNumber = operate(operator, firstNumber, secondNumber);
      console.log(firstNumber);
      calcDisplay.textContent = firstNumber;
    }
    operator = button.textContent;
  });
});

bEquals.addEventListener("click", () => {
  displayValue = "";
  updateDisplay();
  if (firstNumber && secondNumber) {
    firstNumber = operate(operator, firstNumber, secondNumber);
    calcDisplay.textContent = firstNumber;
  }
});
