function isNotANumber(value) {
  return value !== value;
}

// NaN is the only value to not equal itself
// NaN !== NaN => true
// 5 !== 5 => false