// get computer to make a choice
// get player to make a choice
// see which one wins

const choices = ["rock", "paper", "scissors"];
let playerScore = 0;
let computerScore = 0;

function getComputerChoice() {
   let computerChoice = choices[Math.floor(Math.random() * choices.length)]; 
   return computerChoice;
}

function getPlayerChoice() {
    let choice = prompt("Choose rock, paper or scissors");
    let playerChoice = choice.toLowerCase();
    return playerChoice;
}

let computerSelection = getComputerChoice();
let playerSelection = getPlayerChoice()


function checkWinner(playerSelection, computerSelection) {
    if ((playerSelection === "rock" && computerSelection === "scissors") || (playerSelection === "paper" && computerSelection === "rock") || (playerSelection === "scissors" && computerSelection === "rock")) {
        return (`You Win! ${playerSelection[0].toUpperCase() + playerSelection.slice(1)} beats ${computerSelection[0].toUpperCase() + computerSelection.slice(1)}.`);
    } else if (playerSelection === computerSelection) {
        return ("A Tie");
    } else {
        return (`You Lose! ${playerSelection[0].toUpperCase() + playerSelection.slice(1) } loses to ${computerSelection[0].toUpperCase() + computerSelection.slice(1)}. `);
    }
    
}

console.log(checkWinner(playerSelection, computerSelection));

function playRound() {
    var roundResult = (checkWinner(playerSelection, computerSelection));
    if (roundResult.search("You Win!") > -1){
        playerScore++;
        return(`Your score is now ${playerScore} VS ${computerScore}.`);
    } else if (roundResult.search("You Lose!") > -1) {
        computerScore++;
        return(`Your score is now ${playerScore} VS ${computerScore}.`)
    } else {
        return(`Your score has remained unchanged. Your score is ${playerScore} VS ${computerScore}.`);
    }
}

function game() {
    console.log("Welcome, please make a choice")
    for (let i = 0; i < 5; i++) {
        getComputerChoice()
        getPlayerChoice()
        checkWinner()
        playRound()
    }
    if (playerScore > computerScore) {
        return (`Congratulations! You Won! The score was ${playerScore} VS ${computerScore}`)
    } else if (playerScore < computerScore) {
        return (`You Lost! Better luck next time. Your score was ${playerScore} VS ${computerScore}`)
    } else {
        return("We have a Tie!")
    }
}
// play round
// if player wins +1 to player score
// if computer wins +1 to computer score