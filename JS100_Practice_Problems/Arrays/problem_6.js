function oddLengths(array) {
  return array.map(string => string.length).filter(num => num % 2 === 1);
}

let arr = ['a', 'abcd', 'abcde', 'abc', 'ab'];
console.log(oddLengths(arr)); // => [1, 5, 3]