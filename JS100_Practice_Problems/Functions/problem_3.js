let rlSync = require('readline-sync');

function multiply(a, b) {
  let product = a * b;
  console.log(`${a} * ${b} = ${product}`);
}

let firstNumber = Number(rlSync.question('Enter the first number: '));
let secondNumber = Number(rlSync.question('Enter the second number: '));

multiply(firstNumber, secondNumber);