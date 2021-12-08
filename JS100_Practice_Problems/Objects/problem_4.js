let obj = {
  b: 2,
  a: 1,
  c: 3,
};

let array = Object.keys(obj)
let upperCaseArray = array.map(letter => letter.toUpperCase());
console.log(upperCaseArray);