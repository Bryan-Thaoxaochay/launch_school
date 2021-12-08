const readline = require('readline-sync');

function prompt(message) {
  console.log(`=> ${message}`);
}

prompt("How much do you want for your loan? (ie. 1234.56)");
let loanAmount = readline.question();

prompt("What is the APR? (4.5%)");
let apr = readline.question();
if (apr.endsWith('%')) {
  apr = apr.slice(0, apr.length - 1);
}
let monthlyDecimalAPR = (apr / 100) / 12;

prompt("How many months do you want the loan? (14)");
let monthlyLoanDuration = readline.question();

let monthlyPayment = loanAmount * (monthlyDecimalAPR / (1 - Math.pow((1 + monthlyDecimalAPR), (-monthlyLoanDuration))));

prompt(`This is how much you will pay monthly: $${monthlyPayment.toFixed(2)}`);

// Didn't code for all edge cases
// Didn't code for if user wanted to do another calculation