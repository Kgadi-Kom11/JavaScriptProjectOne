let humanScore = 0;
let computerScore = 0;

function getComputerChoice() {
    let computerChoice = Math.floor(Math.random() * 3) + 1;

    if (computerChoice === 1) {
        return "rock";
    }
    else if (computerChoice === 2) {
        return "paper";
    }
    else 
    {
        return "scissors";
    }
}

function getHumanChoice() {
    let humanChoice = window.prompt("Your Choice: ")

    if (humanChoice === "rock") {
        return "Rock";
    }
    else if(humanChoice === "paper") {
        return "Paper";
    }
    else {
        return "Scissors";
    }
}

function playRound(humanChoice, computerChoice) {
    if (humanChoice === "paper" && computerChoice === "rock") {
        return "You win. Paper beats Rock";
        humanScore += 1;
    }
    else if(humanChoice ==="scissors" && computerChoice === "paper") {
        return "You win. Scissors beats Paper";
        humanScore += 1;
    }
    else if(humanChoice === "rock" && computerChoice === "scissors") {
        return "You win. Rock beats Scissors";
        humanScore += 1;
    }
    else if (humanChoice === computerChoice) {
        return "You Tie. Play again";
        humanChoice = 0;
        computerChoice = 0;
    }
    else {
        return "You Lose. " + computerChoice + "beats " + humanChoice;
        computerChoice += 1;
    }
}

let humanChoice = getHumanChoice();
let computerChoice = getComputerChoice();

console.log(playRound);