function oddLengths(array) {
  return array.reduce((newArray, element) => {
    if (element.length % 2 === 1) {
      newArray.push(element.length);
    }
    return newArray;
  }, []);
}

let arr = ['a', 'abcd', 'abcde', 'abc', 'ab'];
console.log(oddLengths(arr)); // => [1, 5, 3]