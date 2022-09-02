//ROCK,SCISSORS & PAPER GAME USING JS
// RULES: Is a two game player that allows players to choose either rock,scissors or paper.
//The choice is compared and this determined the winner with the most powerful weapon.
// Rock destroys scissors, Scissors cuts paper and Paper covers Rock

/*----Step 1:Get player choice and convert input to accept any character */
const choice = prompt("Enter rock,paper or scissors");
const playerInput = choice;

const playerPlay = (playerInput) => {
  playerInput = playerInput.toLowerCase();
  if (
    playerInput === "rock" ||
    playerInput === "scissors" ||
    playerInput === "paper"
  ) {
    return playerInput;
    // else statement to make sure playerInput is either rock,paper or scissors
  } else {
    return "ERROR: type rock,paper or scissors";
  }
};
//console.log user choice

// console.log(playerPlay("paper"));
// console.log(playerPlay("tomato"));

/*----Step 2:create a function to get computer choice */

const computerPlay = () => {
  const randomNumber = Math.floor(Math.random() * 3);
  switch (randomNumber) {
    case 0:
      return "rock";
    case 1:
      return "paper";
    case 2:
      return "scissors";
  }
};
// console.log(computerPlay());
// console.log(computerPlay());
// console.log(computerPlay());

/*----Step 3: create a function to compare user choice & computer choice to determine who's the winner */

const playRound = (playerSelection, computerSelection) => {
  if (playerSelection === "rock") {
    if (computerSelection === "paper") {
      return "You Lose! Paper beats Rock!";
    } else {
      return "Computer Won!!";
    }
  }
  if (playerSelection === "scissors") {
    if (computerSelection === "paper") {
      return "Yeah Buddy: YOU WON!";
    } else {
      return "computer LOSE! Hahahha!!!";
    }
  }
  if (playerSelection === "scissors") {
    if (computerSelection === "rock") {
      return "Sorry Buddy: YOU LOSE!";
    } else {
      return "Computer Won!!";
    }
  }
  if (playerSelection === "paper") {
    if (computerSelection === "scissors") {
      return "Sorry Buddy: YOU LOSE!";
    } else {
      return "Computer Won!!";
    }
  }
};
// console.log(playRound("scissors", "paper"));
// console.log(playRound("rock", "paper"));
// console.log(playRound("paper", "scissors"));
// console.log(playRound("rock", "scissors"));
// console.log(playRound("scissors", "paper"));

const game = () => {
  const playerChoice = playerPlay("ROCK");
  const computerChoice = computerPlay();
  console.log("Player Choice: " + playerChoice);
  console.log(`Computer Choice :  ${computerChoice}`);

  console.log("Result: " + playRound(playerChoice, computerChoice));
};
game();
