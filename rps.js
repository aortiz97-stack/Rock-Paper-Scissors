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
    if (computerSelection === playerSelection){
        return "tied";
    }
    else{
        let winnerConditional = (playerSelection==="rock" && computerSelection==="scissors") ? true :
        (playerSelection==="paper" && computerSelection==="rock")? true :
        (playerSelection==="scissors" && computerSelection==="paper")? true: false;

        return winnerConditional;
    }
}

function playPaperRockScissors(e){
    if (e!==undefined){
        let computerSelection = getComputerChoice();
        let playerSelection = getPlayerChoice(e);
        let winnerStatement = `You won this round! `;
        let loserStatement = `You lost this round! `;
        let tieStatement = `You are tied this round. Please try again.`;
        let finalStatement;

        const computerPlayed = document.createElement("div");
        computerPlayed.textContent = `The computer played ${computerSelection}.`
        document.body.appendChild(computerPlayed);

        const playerPlayed = document.createElement("div");
        playerPlayed.textContent = `You played ${playerSelection}.`
        document.body.appendChild(playerPlayed);

        let winnerConditional = playerWon(computerSelection, playerSelection);

        if (winnerConditional === "tied"){
            finalStatement = tieStatement;
        }
        else{
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
        roundResult.classList.add("result");
        roundResult.textContent = finalStatement;
        document.body.appendChild(roundResult);
    }
    
}


function game(e){
    let winnerCount = 0;
    let loserCount = 0;

    if (e!==undefined){
        //for (let i=0; i< 5; i++){
            playPaperRockScissors(e);
            const buttons = document.querySelectorAll("button");
            buttons.forEach((button) => {
                button.removeEventListener("click", game);
            });
            let resultNodes = document.querySelectorAll(".result");
            let latestResult = resultNodes[resultNodes.length-1];

            if (latestResult.textContent.includes("tied")){
                i-=1;
            }
            else if (latestResult.textContent.includes("won")){
                winnerCount += 1;
            }
            else{
                loserCount += 1;
            }

            const finalResult = document.createElement("div");
            if (winnerCount ===3){
                finalResult.textContent =`----- \n Congratulations! You won the game!`;
                document.body.appendChild(finalResult);
            }
            else if (loserCount ===3){
                finalResult.textContent = `----- \n Sorry, you've lost.`;
                document.body.appendChild(finalResult);
            }

        //}
        

        
    }

    /*for (let i=0; i < 5; i++){
        if (e!==undefined){
            playPaperRockScissors(e);
            let resultNodes = document.querySelectorAll(".result");
            let latestResult = resultNodes[resultNodes.length-1];
            console.log("passed!");
        }
    }*/
    


    /*
    if (latestResult!==undefined){
        for (let i = 0; i < 5; i++){
            let resultNodes = document.querySelectorAll(".result");
            let latestResult = resultNodes[resultNodes.length-1];

            if (latestResult.textContent.includes("tied")){
                i-=1;
            }
            else if (latestResult.textContent.includes("won")){
                winnerCount += 1;
            }
            else{
                loserCount += 1;
            }


            const score = document.createElement("div");
            score.textContent = `Score:\nComputer: ${loserCount}\nYou: ${winnerCount}\n-----`;
            document.body.appendChild(score);

            let buttons = document.querySelectorAll("button");
            buttons.forEach((button) => {
                button.addEventListener("click", playPaperRockScissors)
            });

            const finalResult = document.createElement("div");
            if (winnerCount ===3){
                finalResult.textContent =`Congratulations! You won the game!`;
                document.body.appendChild(finalResult);
            }
            else if (loserCount ===3){
                finalResult.textContent = `Sorry, you've lost.`;
                document.body.appendChild(finalResult);
            }
        }
    }*/
}
//Adding additional features
function addButtons(){
    let b1 = document.createElement("button");
    b1.setAttribute("id", "rock");
    b1.textContent = "Rock";
    document.body.appendChild(b1)
    //b1.addEventListener("click", playPaperRockScissors);

    let b2 = document.createElement("button");
    b2.setAttribute("id", "paper");
    b2.textContent = "Paper";
    document.body.appendChild(b2)
    //b2.addEventListener("click", playPaperRockScissors);

    let b3 = document.createElement("button");
    b3.setAttribute("id", "scissors");
    b3.textContent = "Scissors";
    document.body.appendChild(b3);
    //b3.addEventListener("click", playPaperRockScissors);

    const buttons = document.querySelectorAll("button");
    buttons.forEach((button) => {
        button.addEventListener("click", game);
    });

}

addButtons();



