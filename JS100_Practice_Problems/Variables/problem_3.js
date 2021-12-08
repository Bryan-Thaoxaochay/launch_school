{
  let foo = 'bar';
}

console.log(foo);

/*
  This will bring an error because foo is declared inside a block, and is therefore block-scoped.
  It is unable to be used outside the block.
*/