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

function playGame() {
    for (let i = 0; i < 5; i++) {
        let humanChoice = getHumanChoice();
        let computerChoice = getComputerChoice()
        console.log(playRound(humanChoice, computerChoice));
    }

    if (humanScore > computerScore) {
        return "You have beaten the computer";
    }
    else if(computerScore > humanScore) {
        return "The computer has beaten you."
    }
    else {
        return "You tied with the computer. Try again."
    }
}


//let humanChoice = getHumanChoice();
//let computerChoice = getComputerChoice();

console.log(playRound);