let number = 4936;

let ones = number % 10;

let tens = ((number - ones) % 100) / 10;

let hundreds = ((number - ones - (tens * 10)) % 1000) / 100;

let thousands = ((number - ones - (tens * 10) - (hundreds * 100)) % 10000) / 1000;

console.log(ones);
console.log(tens);
console.log(hundreds);
console.log(thousands);