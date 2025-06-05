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
    //console.log(random)

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

// console.log(getComputerChoice());

/*Create a new function named getHumanChoice.
Use the prompt method to get the user’s input of "rock" "paper" or "scissors".
Using console.log to test what the function returns*/

function getHumanChoice() {
    humanChoice = prompt("Type in your choice of rock, paper or scissors.")
    //console.log(humanChoice);
    //Make your function’s humanChoice parameter case-insensitive so that players can input “rock”, “ROCK”, “RocK”, or other variations.
    humanChoice = humanChoice.toLowerCase();
    //console.log(humanChoice);
    return humanChoice;
}

//console.log(getHumanChoice());

/*Create two new variables named humanScore and computerScore in the global scope.
Initialize those variables with the value of 0.*/

let humanScore = 0;
let computerScore = 0;
let humanWins = false;
let computerWins = false

/*Create a new function named playRound with two parameters for playRound: humanChoice and computerChoice.

Use these two parameters to take the human and computer choices as arguments.*/

function playRound() {
    getHumanChoice();
    //console.log(humanChoice);
    getComputerChoice();
    //console.log(computerChoice);

    if (humanChoice == "rock" && computerChoice == "paper") {
        console.log("You lose! Paper beats Rock.");
        computerWins = true
    }
    else if (humanChoice == "paper" && computerChoice == "scissors") {
        console.log("You lose! Scissors beat Paper.");
        computerWins = true
    }
    else if (humanChoice == "scissors" && computerChoice == "rock") {
        console.log("You lose! Rock beats Scissors.");
        computerWins = true
    }
    else if (humanChoice == "paper" && computerChoice == "rock") {
        console.log("You win! Paper beats Rock.");
        humanWins = true;
    }
    else if (humanChoice == "scissors" && computerChoice == "paper") {
        console.log("You win! Scissors beat Paper.");
        humanWins = true;
    }
    else if (humanChoice == "rock" && computerChoice == "scissors") {
        console.log("You win! Rock beats Scissors.");
        humanWins = true;

        }
    else {
        console.log("You both chose the same, it is a DRAW.");
    }
}

playRound();



/*Write the code for your playRound function to console.log a string value representing the round winner, such as: “You lose! Paper beats Rock”.
Increment the humanScore or computerScore variable based on the round winner.*/