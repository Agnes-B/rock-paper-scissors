/* Create a new function named getComputerChoice.
Randomly generate a number between 0 and 2
If the answer is 0 then return "rock"
else if the answer is 1 then "paper"
else return "scissors"
Console.log returned value
*/

function getComputerChoice() {
    const random = Math.floor(Math.random() * 3)
    console.log(random)

    if (random == 0) {
        return "rock"
    } 
    else if (random == 1) {
        return "paper"
    }
    else {
        return "scissors"
    }
}

console.log(getComputerChoice());

/*Create a new function named getHumanChoice.

Use the prompt method to get the user’s input of "rock" "paper" or "scissors".

Test what your function returns by using console.log.*/

function getHumanChoice() {
    const humanChoice = prompt("Type in your choice of rock, paper or scissors.")
    return humanChoice
}

console.log(getHumanChoice());