// get computer to make a choice
// get player to make a choice
// see which one wins

let choices = ["rock", "paper", "scissors"];

function getComputerChoice() {
   let computerChoice = choices[Math.floor(Math.random() * choices.length)]; 
   return computerChoice;
}

function getPlayerChoice() {
    let choice = prompt("Choose rock, paper or scissors");
    let playerChoice = choice.toLowerCase();
    return playerChoice;
}

const computerSelection = getComputerChoice();
const playerSelection = getPlayerChoice()

function playRound(playerSelection, computerSelection) {
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

console.log(playRound(playerSelection, computerSelection));



