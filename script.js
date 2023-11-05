// get computer to make a choice
// get player to make a choice
// see which one wins

const choices = ["rock", "paper", "scissors"];

let computerScore = 0;
let playerScore = 0;

function getComputerChoice() {
   let computerChoice = choices[Math.floor(Math.random() * choices.length)]; 
   console.log(`Computer chose ${computerChoice}.`);
   return computerChoice;
}

function getPlayerChoice() {
    let choice = prompt("Choose rock, paper or scissors");
    let playerChoice = choice.toLowerCase();
    console.log(`You chose ${playerChoice}.`);
    return playerChoice;
}

let computerSelection = getComputerChoice();
let playerSelection = getPlayerChoice();

function checkWinner(playerSelection, computerSelection) {
    if ((playerSelection === "rock" && computerSelection === "scissors") || 
    (playerSelection === "paper" && computerSelection === "rock") || 
    (playerSelection === "scissors" && computerSelection === "rock")) {
        return "Player Wins!";
    } else if (playerSelection === computerSelection) {
        return "A Tie";
    } else {
        return "Computer Wins!";
    }
}

function playRound(playerSelection,computerSelection) {
    const roundResult = (checkWinner(playerSelection, computerSelection));
    if (roundResult === "Player Wins!"){
        return `You win this round! ${playerSelection[0].toUpperCase() + playerSelection.slice(1)} beats ${computerSelection[0].toUpperCase() + computerSelection.slice(1)}.`;
    } else if (roundResult === "Computer Wins!") {
        return `You lost this round :(. ${playerSelection[0].toUpperCase() + playerSelection.slice(1) } loses to ${computerSelection[0].toUpperCase() + computerSelection.slice(1)}.`;
    } else {
        return "A Tie!";
    }
}

function game() {
    console.log("Welcome, please make a choice.")
    for (let i = 0; i < 5; i++) {
        console.log("* * * * * * * * * * * * * * * * * * *")
        const playerSelection = getPlayerChoice()
        const computerSelection = getComputerChoice()
        console.log(playRound(playerSelection, computerSelection));
        if (checkWinner(playerSelection, computerSelection) === "Player Wins!") {
            playerScore++;
            console.log(`Your score is now ${playerScore} VS ${computerScore}.`);
        } else if (checkWinner(playerSelection, computerSelection) === "Computer Wins!") {
            computerScore++;
            console.log(`Your score is now ${playerScore} VS ${computerScore}.`);
        } else {
            console.log (`Your score remains unchanged. It is ${playerScore} VS ${computerScore}.`);
        }
    }
    console.log("* * * * * * * * * * * * * * * * * * *")
    if (playerScore > computerScore) {
        console.log(`Congratulations! You Won! The score was ${playerScore} VS ${computerScore}.`)
    } else if (playerScore < computerScore) {
        console.log(`You Lost :(! Better luck next time. Your score was ${playerScore} VS ${computerScore}.`)
    } else {
        console.log(`We have a Tie! The score was ${playerScore} VS ${computerScore}.`)
    }
}

game()

// play round
// if player wins +1 to player score
// if computer wins +1 to computer score 