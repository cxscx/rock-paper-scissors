// get computer to make a choice
// get player to make a choice
// see which one wins

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

function playRound (playerSelection, computerSelection) {
    if (playerSelection === "rock" && computerSelection === "scissors") {
        return("You Win! Rock beats Scissors.");
    } else if (playerSelection === "paper" && computerSelection === "rock") {
        return("You Win! Paper beats Rock.");
    } else if (playerSelection === "scissors" && computerSelection === "paper") {
        return ("You Win! Scissors beats Paper.");
    } else if (playerSelection === computerSelection) {
        return ("A Tie");
    } else {
        return (`You Lose! ${playerSelection[0].toUpperCase() + playerSelection.slice(1) } loses to ${computerSelection[0].toUpperCase() + computerSelection.slice(1)}. `);
    }
}
console.log(playRound(playerSelection, computerSelection));

function game() {
    var roundResult = (playRound(playerSelection, computerSelection));
    if (roundResult.search("You Win!") > -1){
        playerScore++;
        return(`Your score is now ${playerScore} VS ${computerScore}.`);
    } else if (roundResult.search("You Lose!") > -1) {
        computerScore++;
        return(`Your score is now ${playerScore} VS ${computerScore}.`)
    } else {
        return(`Your score has remained unchanged. Your score is ${playerScore} VS ${computerScore}.`)
    }
}
// issues is that computerSelection isn't defined, and should make each round run playerSelection