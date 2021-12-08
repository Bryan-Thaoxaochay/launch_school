function stringConverter(string) {
  if (string.length > 10) {
    return string.toUpperCase();
  } else {
    return string;
  }
}

stringConverter('hello world'); // => HELLO WORLD
stringConverter('goodbye'); // => goodbye