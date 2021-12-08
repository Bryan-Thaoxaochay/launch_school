const NAME = 'Victor';
console.log('Good Morning, ' + NAME);
console.log('Good Afternoon, ' + NAME);
console.log('Good Evening, ' + NAME);

NAME = 'Joe';
console.log('Good Morning, ' + NAME);
console.log('Good Afternoon, ' + NAME);
console.log('Good Evening, ' + NAME);

/*
  An error will be thrown because NAME is declared with a const. The value of the variable is
  unable to change. The code before NAME = "Joe" will run, but then it will error.
*/