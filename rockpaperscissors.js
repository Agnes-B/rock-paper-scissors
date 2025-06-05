/* Create a new function named getComputerChoice.
Randomly generate a number between 0 and 2
If the answer is 0 then return "rock"
else if the answer is 1 then "paper"
else return "scissors"
Console.log returned value
*/

let computerChoice = ""
let humanChoice = ""

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


/*Create a new function named getHumanChoice.
Use the prompt method to get the user’s input of "rock" "paper" or "scissors".
Using console.log to test what the function returns*/

function getHumanChoice() {
    humanChoice = prompt("Type in your choice of rock, paper or scissors.")

    //Make your function’s humanChoice parameter case-insensitive so that players can input “rock”, “ROCK”, “RocK”, or other variations.
    humanChoice = humanChoice.toLowerCase();

    return humanChoice;
}



/*Create two new variables named humanScore and computerScore in the global scope.
Initialize those variables with the value of 0.*/

let humanScore = 0;
let computerScore = 0;

/*Create a new function named playRound with two parameters for playRound: humanChoice and computerChoice.

Use these two parameters to take the human and computer choices as arguments.*/

/*Write the code for your playRound function to console.log a string value representing the round winner, such as: “You lose! Paper beats Rock”.
Increment the humanScore or computerScore variable based on the round winner.*/

function playRound() {

    getHumanChoice();
    getComputerChoice();

    if (humanChoice == "rock" && computerChoice == "paper") {
        console.log("You lose! Paper beats Rock.");
        computerScore++;
    }
    else if (humanChoice == "paper" && computerChoice == "scissors") {
        console.log("You lose! Scissors beat Paper.");
        computerScore++;
    }
    else if (humanChoice == "scissors" && computerChoice == "rock") {
        console.log("You lose! Rock beats Scissors.");
        computerScore++;
    }
    else if (humanChoice == "paper" && computerChoice == "rock") {
        console.log("You win! Paper beats Rock.");
        humanScore++;
    }
    else if (humanChoice == "scissors" && computerChoice == "paper") {
        console.log("You win! Scissors beat Paper.");
        humanScore++;
    }
    else if (humanChoice == "rock" && computerChoice == "scissors") {
        console.log("You win! Rock beats Scissors.");
        humanScore++;
        }
    else {
        console.log("You both chose the same, it is a DRAW.");
    }
}

// playing the game 5 times bu calling the playRound() function repeatedly
function playGame() {

    playRound();
    playRound();
    playRound();
    playRound();
    playRound();
}

playGame();

// Displaying final score in the console log.
console.log(`The final score is ${computerScore} for the computer and ${humanScore} for you.`);