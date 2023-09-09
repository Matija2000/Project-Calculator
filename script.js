const digits = document.querySelectorAll(".digit");
const bAdd = document.querySelector(".add");
const bSubtract = document.querySelector(".subtract");
const bMultiply = document.querySelector(".multiply");
const bDivide = document.querySelector(".divide");
const bEquals = document.querySelector(".equals");
const bClear = document.querySelector(".clear");
let calcDisplay = document.querySelector(".calcDisplay");
const bOperation = document.querySelectorAll(".operation");

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

let displayValue;
digits.forEach((digit) => {
  digit.addEventListener("click", () => {
    displayValue = calcDisplay.textContent += digit.textContent;
  });
});

let firstNumber;
let secondNumber;
let operator;

bOperation.forEach((button) => {
  button.addEventListener("click", () => {
    firstNumber = displayValue;
    displayValue = undefined;
    calcDisplay.textContent = undefined;
    operator = button.textContent;
  });
});

let result;
bEquals.addEventListener("click", () => {
  secondNumber = displayValue;

  calcDisplay.textContent = operate(operator, firstNumber, secondNumber);
  result = calcDisplay.textContent;
});

/*My code does the following:
1.For each digit clicked, update the display and store the number in a variable
displayValue.
2. Once one of the operators is clicked set the value of firstNumber variable 
to displayValue. Then update display and displayValue to undefined.
3. When the equals button is clicked secondNumber variable is updated to displayValue
and operate() function is called

example: 100/5 = 20 - firstNumber = '100', secondNumber == '5', operator = '/'

*/

//operate(operator,x,y)
