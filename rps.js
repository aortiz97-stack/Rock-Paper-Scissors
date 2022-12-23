let winnerCount = 0;
let loserCount = 0;

function getComputerChoice() {
  const randomNumber = Math.floor(Math.random() * 3);
  let choice;
  randomNumber === 0
    ? (choice = "Rock")
    : randomNumber === 1
    ? (choice = "Paper")
    : randomNumber === 2
    ? (choice = "Scissors")
    : (choice = null);
  return choice.toLowerCase();
}

function getPlayerChoice(e) {
  return e.target.id;
}

function playerWon(computerSelection, playerSelection) {
  if (computerSelection === playerSelection) {
    return "tied";
  }

  const winnerConditional =
    playerSelection === "rock" && computerSelection === "scissors"
      ? true
      : playerSelection === "paper" && computerSelection === "rock"
      ? true
      : !!(playerSelection === "scissors" && computerSelection === "paper");

  return winnerConditional;
}

function playPaperRockScissors(e) {
  if (e !== undefined) {
    const computerSelection = getComputerChoice();
    const playerSelection = getPlayerChoice(e);
    let winnerStatement = "You won this round! ";
    let loserStatement = "You lost this round! ";
    const tieStatement = "You are tied this round. Please try again.";
    let finalStatement;

    const computerPlayed = document.createElement("div");
    computerPlayed.textContent = `The computer played ${computerSelection}.`;
    document.body.appendChild(computerPlayed);

    const playerPlayed = document.createElement("div");
    playerPlayed.textContent = `You played ${playerSelection}.`;
    document.body.appendChild(playerPlayed);

    const winnerConditional = playerWon(computerSelection, playerSelection);

    if (winnerConditional === "tied") {
      finalStatement = tieStatement;
    } else if (winnerConditional) {
      winnerStatement += `${
        playerSelection.charAt(0).toUpperCase() + playerSelection.slice(1)
      } beats ${computerSelection}!`;
      finalStatement = winnerStatement;
    } else {
      loserStatement += `${
        computerSelection.charAt(0).toUpperCase() + computerSelection.slice(1)
      } beats ${playerSelection}.`;
      finalStatement = loserStatement;
    }
    const roundResult = document.createElement("div");
    roundResult.classList.add("result");
    roundResult.textContent = finalStatement;
    document.body.appendChild(roundResult);

    updateScores();
  }
}

function updateScores() {
  const resultNodeList = document.querySelectorAll(".result");
  const lastChild = resultNodeList[resultNodeList.length - 1];

  if (resultNodeList.length !== 0) {
    if (lastChild.textContent.includes("won")) {
      winnerCount += 1;
    } else if (!lastChild.textContent.includes("tied")) {
      loserCount += 1;
    }

    const scores = document.createElement("div");
    scores.textContent = `Score:\nPlayer: ${winnerCount}\nComputer: ${loserCount}`;
    document.body.appendChild(scores);

    const divider = document.createElement("div");
    divider.textContent = "-----";
    document.body.appendChild(divider);

    const buttons = document.querySelectorAll("button");

    if (winnerCount === 3) {
      const finalResult = document.createElement("div");
      finalResult.textContent = "Congratulations! You won the game!";
      document.body.appendChild(finalResult);
      buttons.forEach((button) => {
        button.removeEventListener("click", playPaperRockScissors);
      });
    } else if (loserCount === 3) {
      const finalResult = document.createElement("div");
      finalResult.textContent = `Sorry, you lost the game. You only won ${winnerCount} out of 5.`;
      document.body.appendChild(finalResult);

      buttons.forEach((button) => {
        button.removeEventListener("click", playPaperRockScissors);
      });
    }
  }
}

function game() {
  const buttons = document.querySelectorAll("button");

  buttons.forEach((button) => {
    button.addEventListener("click", playPaperRockScissors);
  });
}

// Adding additional features
function addButtons() {
  const b1 = document.createElement("button");
  b1.setAttribute("id", "rock");
  b1.textContent = "Rock";
  document.body.appendChild(b1);

  const b2 = document.createElement("button");
  b2.setAttribute("id", "paper");
  b2.textContent = "Paper";
  document.body.appendChild(b2);

  const b3 = document.createElement("button");
  b3.setAttribute("id", "scissors");
  b3.textContent = "Scissors";
  document.body.appendChild(b3);
}

addButtons();
game();
