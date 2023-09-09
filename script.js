const digits = document.querySelectorAll(".digit");
let calcDisplay = document.querySelector(".calcDisplay");

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
  if (operator === "+") {
    return add(firstNumber, secondNumber);
  } else if (operator === "-") {
    return subtract(firstNumber, secondNumber);
  } else if (operator === "*") {
    return multiply(firstNumber, secondNumber);
  } else if (operator === "/") {
    return divide(firstNumber, secondNumber);
  }
}

let displayValue;
digits.forEach((digit) => {
  digit.addEventListener("click", () => {
    displayValue = calcDisplay.textContent += digit.textContent;
    console.log(displayValue);
  });
});
