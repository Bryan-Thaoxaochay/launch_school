const FOO = 'bar';
{
  const FOO = 'qux';
}

console.log(FOO);

/*
  No error, since the variables are in different environments. They don't interfere with each
  other.
*/