function getComputerChoice(){
    let randomNumber = Math.floor(Math.random()*3);
    let choice;
    (randomNumber === 0)? choice= "Rock" :
    (randomNumber===1)? choice = "Paper" :
    (randomNumber==2) ? choice= "Scissors" : choice=null;
    return choice;
}

function getPlayerChoice(){
    let choice = prompt("Please enter rock, paper, or scissors.").toLowerCase();
    if (!(choice === 'rock' || choice==='paper'||choice==='scissors')){
        throw "Only rock, paper, or scissors is accepted."
    }
    return choice
}

alert(getPlayerChoice());