// get computer to make a choice
// get player to make a choice
// see which one wins

function getComputerChoice() {
    let choices = ["rock", "paper", "scissors"]
    let computerChoice = choices[Math.floor(Math.random() * choices.length)]; 
    console.log(computerChoice);
}

function getPlayerChoice() {
    let choice = prompt("Choose rock, paper or scissors")
    let playerChoice = choice.toLowerCase()
    console.log(playerChoice);
}

const computerSelection = getComputerChoice();
const playerSelection = getPlayerChoice()

function playRound (playerSelection, computerSelection) {
    if (playerSelection === "rock" && computerSelection === "scissors") {
        return("You Win! Rock beats Scissors.");
    } else if (playerSelection === "paper" && computerSelection === "rock") {
        return("You Win! Paper beats Rock.");
    } else if (playerSelection === "scissors" && computerSelection === "paper") {
        return ("You Win! Scissors beats Paper.");
    } else if (playerSelection === computerSelection) {
        return ("A Tie!");
    } else {
        return (`You Lose! ${computerSelection} beats ${playerSelection}`);
    }
}
// issues is that computerSelection isn't defined, and should make each round run playerSelection