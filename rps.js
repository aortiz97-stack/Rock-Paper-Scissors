function getComputerChoice(){
    let randomNumber = Math.floor(Math.random()*3);
    let choice;
    (randomNumber === 0)? choice= "Rock" :
    (randomNumber===1)? choice = "Paper" :
    (randomNumber==2) ? choice= "Scissors" : choice=null;
    return choice.toLowerCase();
}

function getPlayerChoice(e){
    if (e === undefined) return;
    else{
        return(e.target.id);
    }
}

function playerWon(computerSelection, playerSelection){
    let winnerConditional = (playerSelection==="rock" && computerSelection==="scissors") ? true :
    (playerSelection==="paper" && computerSelection==="rock")? true :
    (playerSelection==="scissors" && computerSelection==="paper")? true: false;

    return winnerConditional;
}

function playPaperRockScissors(e){
    if (e!==undefined){
        let computerSelection = getComputerChoice();
        let playerSelection = getPlayerChoice(e);
        let winnerStatement = `You won this round! `;
        let loserStatement = `You lost this round! `;
        let tieStatement = `You are tied this round. Please try again.`;
        let finalStatement;

        let tieConditional = (computerSelection===playerSelection);

        const computerPlayed = document.createElement("div");
        computerPlayed.textContent = `The computer played ${computerSelection}.`
        document.body.appendChild(computerPlayed);

        const playerPlayed = document.createElement("div");
        playerPlayed.textContent = `You played ${playerSelection}.`
        document.body.appendChild(playerPlayed);

        if (tieConditional){
            finalStatement = tieStatement;
        }
        else{
            let winnerConditional = playerWon(computerSelection, playerSelection);

            if (winnerConditional){
                winnerStatement += `${playerSelection.charAt(0).toUpperCase() + playerSelection.slice(1)} beats ${computerSelection}!`;
                finalStatement = winnerStatement;
            }
            else{
                loserStatement += `${computerSelection.charAt(0).toUpperCase() + computerSelection.slice(1)} beats ${playerSelection}.`;
                finalStatement = loserStatement;
            }
        }
        const roundResult = document.createElement("div");
        roundResult.textContent = finalStatement;
        document.body.appendChild(roundResult);

        const space = document.createElement("div");
        space.textContent = "-----";
        document.body.appendChild(space);
        return finalStatement;
    }
    
}

function game(){
    let winnerCount = 0;
    let loserCount = 0;
    let acceptableRounds = [3,5,7,9];

    gameOutcome = playPaperRockScissors();

    if (gameOutcome.includes("tied")){
        i-=1;
    }
    else if (gameOutcome.includes("Win")){
        winnerCount +=1;
    }
    else{
        loserCount += 1;
    }
    if (winnerCount ==1){
        console.log(`Congratulations! You won the game!`);
    }
    else if (loserCount ==1){
        console.log(`Sorry, you've lost.`);
    }
}

//Adding additional features

b1 = document.createElement("button");
b1.setAttribute("id", "rock");
b1.textContent = "Rock";
document.body.appendChild(b1)
b1.addEventListener("click", playPaperRockScissors);

b2 = document.createElement("button");
b2.setAttribute("id", "paper");
b2.textContent = "Paper";
document.body.appendChild(b2)
b2.addEventListener("click", playPaperRockScissors);

b3 = document.createElement("button");
b3.setAttribute("id", "scissors");
b3.textContent = "Scissors";
document.body.appendChild(b3);
b3.addEventListener("click", playPaperRockScissors);
//game();


