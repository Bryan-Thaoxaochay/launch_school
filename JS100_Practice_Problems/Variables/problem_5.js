let foo = 'bar';
{
  let foo = 'qux';
}

console.log(foo);

/*
  'bar' will be displayed since the other declaration is block-scoped. We cannot access that
  variable.
*/