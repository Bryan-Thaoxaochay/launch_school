let bar = 1;
function foo() {
  let bar = 2;
}

foo();
console.log(bar);

// 1 is console logged because the variable inside the function is block-scoped.