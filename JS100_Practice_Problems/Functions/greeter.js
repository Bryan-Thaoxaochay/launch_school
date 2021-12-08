let rlSync = require('readline-sync');

function getFullName(question) {
  let name = rlSync.question(question);
  return name;
}

let firstName = getFullName('What is your first name? ');
let lastName = getFullName('What is your last name? ');

console.log(`Hello, ${firstName} ${lastName}!`);