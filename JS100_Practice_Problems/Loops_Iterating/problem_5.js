function randomNumberBetween(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}

let tries = 0;
let result;

do {
  result = randomNumberBetween(1, 6);
  tries += 1;
} while (result <= 2);
// This code will execute at least once, then the condition will be checked. May repeat if needed.

console.log('It took ' + String(tries) + ' tries to get a number greater than 2');