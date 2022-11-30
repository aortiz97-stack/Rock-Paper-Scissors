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

function playPaperRockScissors(computerSelection, playerSelection){
    console.log(`Computer: ${computerSelection}`);
    console.log(`Player: ${playerSelection}`);
    let winnerStatement = `You Win! `;
    let loserStatement = `You Lose! `;
    let tieStatement = `You are tied. You both chose ${computerSelection}. Please try again.`;
    let finalStatement;

    let tieConditional = (computerSelection===playerSelection);

    if (tieConditional){
        finalStatement = tieStatement;
    }

    else{
        let winnerConditional = (playerSelection==="rock" && computerSelection==="scissors") ? true :
        (playerSelection==="paper" && computerSelection==="rock")? true :
        (playerSelection==="scissors" && computerSelection==="paper")? true: false;

        if (winnerConditional){
            winnerStatement += `${playerSelection.charAt(0).toUpperCase() + playerSelection.slice(1)} beats ${computerSelection}!`;
            finalStatement = winnerStatement;
        }

        else{
            loserStatement += `${computerSelection.charAt(0).toUpperCase() + computerSelection.slice(1)} beats ${playerSelection}.`;
            finalStatement = loserStatement;
        }
    }
    return finalStatement;
}

alert(playPaperRockScissors(getComputerChoice(), getPlayerChoice()));