const playerPlay = (playerInput) => {
  playerInput = playerInput.toLowerCase();
  if (
    playerInput === "rock" ||
    playerInput === "scissors" ||
    playerInput === "paper"
  ) {
    return playerInput;
  } else {
    return "ERROR: type rock,paper or scissors";
  }
};

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

const playRound = (playerSelection, computerSelection) => {
  if (playerSelection === computerSelection) {
    return " Is a Draw game";
  }
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

const game = () => {
  const playerChoice = playerPlay("scissors");
  const computerChoice = computerPlay();
  console.log("Player Choice: " + playerChoice);
  console.log(`Computer Choice :  ${computerChoice}`);

  console.log("Result: " + playRound(playerChoice, computerChoice));
};
game();
