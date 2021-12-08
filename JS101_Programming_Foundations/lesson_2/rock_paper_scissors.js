const readline = require("readline-sync");
const VALID_CHOICES = ['r', 'p', 's', 'l', 'S'];
const WINNING_COMBOS = {
  r: ['s', 'l'],
  p: ['r', 'S'],
  s: ['p', 'l'],
  l: ['p', 'S'],
  S: ['r', 's']
}

let userScore = 0;
let computerScore = 0;
let playGame = true;

function prompt(message) {
  console.log (`=> ${message}`);
}

function updateScore(score) {
  return score += 1;
}

function displayWinner(choice, computerChoice) {
  if (WINNING_COMBOS[choice].includes(computerChoice)) {
    userScore = updateScore(userScore);
    prompt(`You win! You: ${userScore} Computer: ${computerScore}`);
  } else if (WINNING_COMBOS[computerChoice].includes(choice)) {
      computerScore = updateScore(computerScore);
      prompt(`You lose! You: ${userScore} Computer: ${computerScore}.`);
  } else {
      prompt(`It's a tie! You: ${userScore} Computer: ${computerScore}.`);
  }
}

function playAgain() {
  prompt(`Do you want to play again? (y/n)`);
  let answer = readline.question().toLowerCase();
  while (answer[0] !== 'n' && answer[0] !== 'y') {
    prompt(`Please enter "y" or "n".`);
    answer = readline.question().toLowerCase();
  }

  if (answer[0] !== 'y') playGame = false;
}

while (playGame) {
  prompt(`Choose one: ${VALID_CHOICES.join(', ')}. (rock, paper, scissors, lizard, Spock)`);
  let choice = readline.question();

  while (!VALID_CHOICES.includes(choice)) {
    prompt("That's not a valid choice.");
    choice = readline.question();
  }

  let randomIndex = Math.floor(Math.random() * VALID_CHOICES.length);
  let computerChoice = VALID_CHOICES[randomIndex];

  prompt(`You chose ${choice} and computer chose ${computerChoice}.`);

  displayWinner(choice, computerChoice);

  if (userScore === 3) {
    prompt(`You are the grand winner!`);
    userScore = 0;
    computerScore = 0;
    playAgain();
  } else if (computerScore === 3) {
    prompt(`You are the grand loser!`);
    computerScore = 0;
    userScore = 0;
    playAgain();
  } else {
    prompt(`Let's continue.`);
  }
}