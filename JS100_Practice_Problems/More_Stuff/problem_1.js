let array1 = [1, 2, 3];
let array2 = array1;
array1[1] = 4;
console.log(array2); // => [1, 4, 3]
// They are two different variables, but they point to the same array.