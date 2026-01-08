const buttons = document.querySelectorAll("button");
const userChoiceDisplay = document.querySelector("#user-choice");
const computerChoiceDisplay = document.querySelector("#computer-choice");
const resultChoiceDisplay = document.querySelector(".results");
const userScoreDisplay = document.querySelector("#userScore");
const computerScoreDisplay = document.querySelector("#computerScore");
const roundDisplay = document.querySelector("#round");
const finalWinnerDisplay = document.querySelector(".final-winner");
const reset = document.querySelector("#resetGame")

let userChoice;
let compChoice;
let result;
let userScore = 0;
let computerScore = 0;
let currentRound = 1;
let totalRounds = 5

buttons.forEach((button) => {
    button.addEventListener("click", (e) => {
        userChoice = e.target.textContent;
        userChoiceDisplay.textContent = "User Choice: " + userChoice;
        computerChoice()
        playRound(userChoice, compChoice)
        runningScore(userScore, computerScore)
    })
})

reset.addEventListener("click", () => {
        resetGameRound()
    })

function computerChoice() {
    let computerChoice = Math.floor(Math.random() * buttons.length);
    if (currentRound <= totalRounds) {
        if (computerChoice === 0) {
            compChoice = "Rock";
        }
        else if (computerChoice === 1) {
            compChoice = "Paper";
        }
        else if (computerChoice === 2) {
            compChoice = "Scissors"
        }
    }

    computerChoiceDisplay.textContent ="Computer Choice: " + compChoice;
    //runningScore(computerScore)
}

function playRound(userChoice, compChoice) {
    if (currentRound <= totalRounds) {
        if (userChoice === compChoice) {
            result = "Tied with Computer!";
        }
        else if (userChoice === "Rock" && compChoice === "Scissors") {
            result = "User Win! Rock beats Scissors!";
            userScore++;
        }
        else if (userChoice === "Paper" && compChoice === "Rock") {
            result = "User Win! Paper Covers Rock!";
            userScore++; 
        }
        else if (userChoice === "Scissors" && compChoice === "Paper") {
            result = "User Win! Scissors cuts Paper!";
            userScore++; 
        }
        else if (userChoice === "Paper" && compChoice === "Scissors") {
            result = "Computer Wins! User Lose! Scissors cuts Paper!";
            computerScore++; 
        }
        else if (userChoice === "Scissors" && compChoice === "Rock") {
            result = "Computer Wins! User Lose! Rock beats Scissors!";
            computerScore++; 
        }
        else if (userChoice === "Rock" && compChoice === "Paper") {
            result = "Computer Wins! User Lose! Paper Covers Rock!";
            computerScore++;
        }

        roundDisplay.textContent = "Round: " + currentRound + " of " + totalRounds;
        currentRound++
    }  
    
    if (currentRound < totalRounds) {
        runningScore()
    }

    resultChoiceDisplay.textContent = result;
    userScoreDisplay.textContent = "User Score: " + userScore;
    computerScoreDisplay.textContent = "Computer Score: " + computerScore;
}

function runningScore(userScore, computerScore) {
    
    if (userScore > computerScore) {
        finalWinnerDisplay.textContent = "Congratulations User! You have won the game!!"
    }
    else if (userScore < computerScore)  {
        finalWinnerDisplay.textContent = "Congratulations Computer! You have won the game!!";
    }
    else  {
        finalWinnerDisplay.textContent = "Sorry, You tied with the computer."
    }
}

function resetGameRound() {
    currentRound = 1;
    roundDisplay.textContent = "Round: " + currentRound + " of " + totalRounds;

    userScoreDisplay.textContent = "User Score: ";
    computerScoreDisplay.textContent = "Computer Score: ";

    userChoiceDisplay.textContent = "User Choice: ";
    computerChoiceDisplay.textContent = "Computer Choice: ";

    resultChoiceDisplay.textContent = "";
    finalWinnerDisplay.textContent = "";
}