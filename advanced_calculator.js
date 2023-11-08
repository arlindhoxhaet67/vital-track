// filename: advanced_calculator.js

// This code demonstrates an advanced calculator with several mathematical operations.
// It supports addition, subtraction, multiplication, division, exponentiation, and factorial.
// The calculator takes input from the user and displays the result after each operation.

function add(a, b) {
  return a + b;
}

function subtract(a, b) {
  return a - b;
}

function multiply(a, b) {
  return a * b;
}

function divide(a, b) {
  if (b === 0) {
    throw new Error("Cannot divide by zero");
  }
  return a / b;
}

function exponentiate(base, exponent) {
  return Math.pow(base, exponent);
}

function factorial(n) {
  if (n < 0) {
    throw new Error("Cannot calculate factorial of a negative number");
  }
  if (n === 0 || n === 1) {
    return 1;
  }
  return n * factorial(n - 1);
}

function getInput() {
  const input = prompt("Enter a number: ");
  if (!Number.isNaN(Number(input))) {
    return Number(input);
  } else {
    alert("Invalid input, please enter a valid number");
    return getInput();
  }
}

function getOperation() {
  const operation = prompt(
    "Enter an operation (+, -, *, /, ^, !):"
  ).toLowerCase();
  if (isValidOperation(operation)) {
    return operation;
  } else {
    alert("Invalid operation, please enter a valid operation");
    return getOperation();
  }
}

function isValidOperation(operation) {
  const validOperations = ["+", "-", "*", "/", "^", "!"];
  return validOperations.includes(operation);
}

function performCalculation() {
  const num1 = getInput();
  const operation = getOperation();

  if (operation === "!") {
    const result = factorial(num1);
    alert(`Result: ${num1}! = ${result}`);
  } else {
    const num2 = getInput();
    let result;

    switch (operation) {
      case "+":
        result = add(num1, num2);
        break;
      case "-":
        result = subtract(num1, num2);
        break;
      case "*":
        result = multiply(num1, num2);
        break;
      case "/":
        result = divide(num1, num2);
        break;
      case "^":
        result = exponentiate(num1, num2);
        break;
    }

    alert(`Result: ${num1} ${operation} ${num2} = ${result}`);
  }
}

function startCalculator() {
  let continueCalculation = true;

  while (continueCalculation) {
    performCalculation();
    const continueConfirmation = prompt(
      "Would you like to perform another calculation? (yes/no)"
    );
    if (continueConfirmation.toLowerCase() !== "yes") {
      continueCalculation = false;
    }
  }

  alert("Calculator session ended. Thank you!");
}

startCalculator();
// End of advanced_calculator.js