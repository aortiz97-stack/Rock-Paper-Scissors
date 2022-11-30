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

function playPaperRockScissors(computerSelection, playerSelection){
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
    return finalStatement;
}

function game(){
    let winnerCount = 0;
    let loserCount = 0;
    let acceptableRounds = [3,5,7,9];
    let rounds = parseInt(prompt("Enter the number of rounds you would like to play. Odd numbers between 1 and 10 only, non-inclusive."));
    if (!acceptableRounds.includes(rounds)){
        throw "Number of rounds must be an odd number between 1 and 10.";
    }


    for (i =0; i < rounds; i++){
        let computerChoice = getComputerChoice();
        let playerChoice = getPlayerChoice();

        console.log(playPaperRockScissors(computerChoice, playerChoice));

        if (computerChoice===playerChoice){
            i-=1;
        }
   
        else if (playerWon(computerChoice, playerChoice)){
            winnerCount +=1;
        }
        else{
            loserCount += 1;
        }

        if (winnerCount >= rounds/2 + 0.5){
            console.log(`Congratulations! You won the game!`);
            break;
        }
        else if (loserCount >= rounds/2 + 0.5){
            console.log(`Sorry, you've lost. You only won ${winnerCount} times.`);
            break;
        }
    }
}

game();
