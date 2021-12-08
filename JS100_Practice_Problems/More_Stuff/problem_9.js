function isNegativeZero(zero) {
  let positiveOrNegativeZero = 5  / zero;

  if (positiveOrNegativeZero === -Infinity) {
    return true;
  } else {
    return false;
  }
}

console.log(isNegativeZero(-0));
console.log(isNegativeZero(0));