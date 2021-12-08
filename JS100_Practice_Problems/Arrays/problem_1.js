let array1 = [1, 2, undefined, 4]; // => length is 4; it includes undefined values as well

let array2 = [1]; // => length is 5; the length is getting set to 5
array2.length = 5;

let array3 = []; // => length is 0; there is no negative index to go off since it is empty
array3[-1] = [1];

let array4 = [1, 2, 3, 4, 5]; // => length is 3; the length is getting set to 3, removing other elements
array4.length = 3;

let array5 = []; // => length is 101; a value is given to the 100th index and filled with undefined
array5[100] = 3;