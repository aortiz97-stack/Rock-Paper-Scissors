function getComputerChoice(){
    let randomNumber = Math.floor(Math.random()*3);
    let choice;
    (randomNumber === 0)? choice= "Rock" :
    (randomNumber===1)? choice = "Paper" :
    (randomNumber==2) ? choice= "Scissors" : choice=null;
    return choice.toLowerCase();
}

function getPlayerChoice(){
    let choice = prompt("Please enter rock, paper, or scissors.").toLowerCase();
    if (!(choice === 'rock' || choice==='paper'||choice==='scissors')){
        throw "Only rock, paper, or scissors is accepted."
    }
    return choice
}

function playerWon(computerSelection, playerSelection){
    let winnerConditional = (playerSelection==="rock" && computerSelection==="scissors") ? true :
    (playerSelection==="paper" && computerSelection==="rock")? true :
    (playerSelection==="scissors" && computerSelection==="paper")? true: false;

    return winnerConditional;
}

function playPaperRockScissors(){
    let computerSelection = getComputerChoice();
    let playerSelection = getPlayerChoice();
    
    let winnerStatement = `You Win! `;
    let loserStatement = `You Lose! `;
    let tieStatement = `You are tied. You both chose ${computerSelection}. Please try again.`;
    let finalStatement;
 

    let tieConditional = (computerSelection===playerSelection);

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
    console.log(finalStatement);
    return finalStatement;
    
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
b1.setAttribute("id", "rock")
b2 = document.createElement("button");
b2.setAttribute("id", "paper");
b3 = document.createElement("button");
b3.setAttribute("id", "scissors");
game();
