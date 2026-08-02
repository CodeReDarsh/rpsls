'use strict'
/**
 * Step1: getComputerChoice needs to return a random play between rock, paper, 
 * scissors, lizard or spock. Can use Math.random.
 * 
 * Step2: getHumanChoice needs to prompt the user for their choice. Assume user
 * always inputs a valid choice. Make fetched value case insensitive (probably
 * convert to lowercase). 
 * 
 * Step3: humanScore and computerScore will keep track of score. First to win 3 
 * out of 5 rounds wins.
 * 
 * Step4: playRound contains the logic to play a single round. Takes humanChoice
 * and computerChoice as arguments. Console.log each rounds winner with reason
 * and increment the winner score accordingly.
 * 
 * Step5: playGame has logic to play entire game of 5 rounds
 */

let humanScore = 0; let computerScore = 0;

function getComputerChoice() {
    switch (Math.ceil(Math.random() * 5)) {
        case 1:
            return "rock";
        case 2:
            return "paper";
        case 3:
            return "scissors";
        case 4:
            return "lizard";
        default:
            return "spock";
    }
}

function getHumanChoice() {
    let humanChoice = prompt(`Enter your choice for round ${humanScore + 
        computerScore + 1}`);
    return humanChoice.toLowerCase();
}


console.log(getComputerChoice());
// console.log(getHumanChoice());
