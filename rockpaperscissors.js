/* Create a new function named getComputerChoice.

Randomly generate a number between 0 and 2

If the answer is 0 then return "rock"

else if the answer is 2 then "paper"

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