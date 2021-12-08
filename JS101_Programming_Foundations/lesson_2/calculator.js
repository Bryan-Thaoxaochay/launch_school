const readline = require('readline-sync');
const calculatorMessages = require("./calculator_messages.json");

function prompt(message) {
  console.log(`=> ${message}`);
}

function invalidNumber(number) {
  return number.trimStart() === "" || Number.isNaN(Number(number));
}

prompt(calculatorMessages["Welcome"]);

while (true) {
  prompt(calculatorMessages["First Question"]);
  let number1 = readline.question();
  while (invalidNumber(number1)) {
    prompt(calculatorMessages["Number Error"]);
    number1 = readline.question();
  }

  prompt(calculatorMessages["Second Question"]);
  let number2 = readline.question();
  while (invalidNumber(number2)) {
    prompt(calculatorMessages["Number Error"]);
    number2 = readline.question();
  }

  prompt(calculatorMessages["Operation Question"]);
  let operation = readline.question();
  while (!['1', '2', '3', '4'].includes(operation)) {
    prompt(calculatorMessages["Operation Error"]);
    operation = readline.question();
  }

  let output;
  switch (operation) {
    case "1":
      output = Number(number1) + Number(number2);
      break;
    case "2":
      output = Number(number1) - Number(number2);
      break;
    case "3":
      output = Number(number1) * Number(number2);
      break;
    case "4":
      output = Number(number1) / Number(number2);
      break;
  }

  console.log(calculatorMessages["Result"] + output);

  prompt(calculatorMessages["Another Calculation"]);
  let anotherOne = readline.question();

  if (anotherOne.toLowerCase() !== "y") break;
}

