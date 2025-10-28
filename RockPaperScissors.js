

/*function getComputerChoice() {
    let randomChoice = Math.floor(Math.random() * 3) + 1;

    if (randomChoice === 1) {
        return "rock";
    }
    else if (randomChoice === 2) {
        return "paper";
    }
    else 
    {
        return "scissors";
    }
}
*/
//let computerChoice = getComputerChoice();

//console.log(computerChoice);

function getHumanChoice() {
    let humanChoice = window.prompt("Your Choice: ", "Rock")

    if (humanChoice === "Rock") {
        return "Rock";
    }
    else if(humanChoice === "Paper") {
        return "Paper";
    }
    else {
        return "Scissors";
    }
}

let mychoice = getHumanChoice();
console.log(mychoice)