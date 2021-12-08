let counter = 0;

while (counter = 1) {// Loop doesn't have a falsy evaluation. It will always be true.
  console.log(counter);
  counter += 1;

  if (counter > 2) { // Counter never goes above 2 because the code above keeps it at 2
    break;
  }
}

// Important to use <, >, <=, or >= otherwise the conditions will be misinterpreted.