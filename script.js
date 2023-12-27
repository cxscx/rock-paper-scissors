let computerScore = 0;
let playerScore = 0;
let playerSelection;
const choices = ["rock", "paper", "scissors"];
const readyToPlay = document.getElementById('player-choices')
const btnRock = document.getElementById('player-rock');
const btnPaper = document.getElementById('player-paper');
const btnScissors = document.getElementById('player-scissors');
const computerChoice = document.getElementById('computer-choice')
const playerChoice = document.getElementsByClassName('player-choices')

btnRock.addEventListener("click", () => {
    const computerSelection = getComputerChoice();
    playerSelection = choices[0]
    console.log("Player chooses rock");
    checkWinner(playerSelection, computerSelection);
});

btnPaper.addEventListener('click', () => {
    const computerSelection = getComputerChoice();
    playerSelection = choices[1]
    console.log("Player chooses paper");
    checkWinner(playerSelection, computerSelection);
});

btnScissors.addEventListener('click', () => {
    const computerSelection = getComputerChoice();
    playerSelection = choices[2]
    console.log("Player chooses scissors");
    checkWinner(playerSelection, computerSelection);
})

function getComputerChoice() {
    let computerChoice = choices[Math.floor(Math.random() * choices.length)]; 
    document.getElementById('computer-choice').innerHTML = `Computer chose ${computerChoice}.`;
    return computerChoice;
 };

function checkWinner(playerSelection, computerSelection) {
    if ((playerSelection === choices[0] && computerSelection === choices[2]) ||
    (playerSelection === choices[1] && computerSelection === choices[0])||
    (playerSelection === choices[2] && computerSelection === choices[1])){
        document.getElementById('result').innerHTML = "You Win!";
    } else if (playerSelection === computerSelection) {
        document.getElementById('result').innerHTML = "A Tie!"
    } else {
        document.getElementById('result').innerHTML = "You Lose!"
    }
}



// function checkWinner(playerSelection, computerSelection) {
//     getComputerChoice()
//     if ((playerSelection === "rock" && computerSelection === "scissors") || 
//     (playerSelection === "paper" && computerSelection === "rock") || 
//     (playerSelection === "scissors" && computerSelection === "paper")) {
//         document.getElementById('result').innerHTML = 'You Win!';
//     } else if (playerSelection === computerSelection) {
//         document.getElementById('result').innerHTML = 'A Tie!';
//     } else {
//         document.getElementById('result').innerHTML = "You Lose!";
//     }
// }

// function playRound(playerSelection,computerSelection) {
//     const roundResult = (checkWinner(playerSelection, computerSelection));
//     if (roundResult === "Player Wins!"){
//         return `You win this round! ${playerSelection[0].toUpperCase() + playerSelection.slice(1)} beats ${computerSelection[0].toUpperCase() + computerSelection.slice(1)}.`;
//     } else if (roundResult === "Computer Wins!") {
//         return `You lost this round :(. ${playerSelection[0].toUpperCase() + playerSelection.slice(1) } loses to ${computerSelection[0].toUpperCase() + computerSelection.slice(1)}.`;
//     } else {
//         return "A Tie!";
//     }
// }


// function game() {
//     console.log("Welcome, please make a choice.")
//     for (let i = 0; i < 5; i++) {
//         console.log("* * * * * * * * * * * * * * * * * * *")
        // const playerSelection = getPlayerChoice()
        // const computerSelection = getComputerChoice()
//         console.log(playRound(playerSelection, computerSelection));
//         if (checkWinner(playerSelection, computerSelection) === "Player Wins!") {
//             playerScore++;
//             console.log(`Your score is now ${playerScore} VS ${computerScore}.`);
//         } else if (checkWinner(playerSelection, computerSelection) === "Computer Wins!") {
//             computerScore++;
//             console.log(`Your score is now ${playerScore} VS ${computerScore}.`);
//         } else {
//             console.log (`Your score remains unchanged. It is ${playerScore} VS ${computerScore}.`);
//         }
//     }
//     console.log("* * * * * * * * * * * * * * * * * * *")
//     if (playerScore > computerScore) {
//         console.log(`Congratulations! You Won! The score was ${playerScore} VS ${computerScore}.`)
//     } else if (playerScore < computerScore) {
//         console.log(`You Lost :(! Better luck next time. Your score was ${playerScore} VS ${computerScore}.`)
//     } else {
//         console.log(`We have a Tie! The score was ${playerScore} VS ${computerScore}.`)
//     }
// }

// game()

// play round
// if player wins +1 to player score
// if computer wins +1 to computer score 