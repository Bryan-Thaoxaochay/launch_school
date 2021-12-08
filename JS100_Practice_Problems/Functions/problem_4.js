function scream(words) {
  words = words + '!!!!';
  return;
  console.log(words);
}

scream('Yipeee');

// This console logs nothing because the console log is after the function has already returned.