// Create a new function named getComputerChoice.


let computerChoice = ""
let humanChoice = ""
let humanScore = 0
let computerScore = 0
const buttons = document.querySelectorAll("button");
const results = document.createElement("div");
const roundWinner = document.createElement("div");
const scoreCard = document.createElement("div");
const newGameBtn = document.createElement("button");
newGameBtn.textContent = "Play again!"

function getComputerChoice() {
    const random = Math.floor(Math.random() * 3)

    if (random == 0) {
        computerChoice = "rock";
    } 
    else if (random == 1) {
        computerChoice = "paper";
    }
    else {
        computerChoice = "scissors";
    }
    return computerChoice;
}

function startGame() {
    humanScore = 0;
    computerScore = 0;
    roundWinner.textContent = "";
    scoreCard.textContent = "";
    results.appendChild(roundWinner);
    results.appendChild(scoreCard);
    document.body.appendChild(results);

}


/*Create two new variables named humanScore and computerScore in the global scope.
Initialize those variables with the value of 0.*/



/*Create a new function named playRound with two parameters for playRound: humanChoice and computerChoice.

Use these two parameters to take the human and computer choices as arguments.*/

/*Write the code for your playRound function to console.log a string value representing the round winner, such as: “You lose! Paper beats Rock”.
Increment the humanScore or computerScore variable based on the round winner.*/

async function updateScore() {

    scoreCard.textContent = `The score is ${computerScore} for the computer and ${humanScore} for you.`;


}

async function checkWinner() {
    await new Promise(resolve => setTimeout(resolve, 200))
    if (humanScore == 5) {
        gameOver("Human");
    } else if (computerScore == 5) {
        gameOver("Computer");
    }
}

startGame();

function playRound(e) {

    humanChoice = e.target.id;
    getComputerChoice();

    if (humanChoice == "rock" && computerChoice == "paper") {
        roundWinner.textContent = "You lose! Paper beats Rock.";
        computerScore++;
    }
    else if (humanChoice == "paper" && computerChoice == "scissors") {
        roundWinner.textContent = "You lose! Scissors beat Paper.";
        computerScore++;
    }
    else if (humanChoice == "scissors" && computerChoice == "rock") {
        roundWinner.textContent = "You lose! Rock beats Scissors.";
        computerScore++;
    }
    else if (humanChoice == "paper" && computerChoice == "rock") {
        roundWinner.textContent = "You win! Paper beats Rock.";
        humanScore++;
    }
    else if (humanChoice == "scissors" && computerChoice == "paper") {
        roundWinner.textContent = "You win! Scissors beat Paper.";
        humanScore++;
    }
    else if (humanChoice == "rock" && computerChoice == "scissors") {
        roundWinner.textContent = "You win! Rock beats Scissors.";
        humanScore++;
        }
    else {
        roundWinner.textContent = "You both chose the same, it is a DRAW.";
    }


    updateScore();
    checkWinner();

}

function gameOver(player) {
    alert(`Game over! ${player} won.`)
    buttons.forEach(button => button.disabled);
    document.body.appendChild(newGameBtn);
}

function newGame() {
    document.body.removeChild(results);
    document.body.removeChild(newGameBtn);
    startGame();
}

buttons.forEach(button => button.addEventListener('click', playRound));
newGameBtn.addEventListener('click', newGame);





// playing the game 5 times bu calling the playRound() function repeatedly
/*
function playGame() {
    for (let i = 0; i < 5; i++) {
    playRound();
    }
}

playGame();
*/

// Displaying final score in the console log.