let foo = {
  a: 'hello',
  b: 'world',
};

let qux = 'hello';

function bar(argument1, argument2) {
  argument1.a = 'hi';
  argument2 = 'hi';
}

bar(foo, qux);

console.log(foo.a); // => 'hi' because objects are mutable
console.log(qux); // => 'hello' because a string is a primitive value and they are immutable
// It is 'hi' if console logged in the function, but it doesn't change outside of it