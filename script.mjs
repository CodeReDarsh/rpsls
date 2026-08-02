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
            return 'rock';
        case 2:
            return 'paper';
        case 3:
            return 'scissors';
        case 4:
            return 'lizard';
        default:
            return 'spock';
    }
}

function getHumanChoice() {
    let humanChoice = prompt(`Enter your choice for round ${humanScore +
        computerScore + 1}`);
    return humanChoice.toLowerCase();
}

function playerWins(humanChoice, computerChoice) {
    switch (computerChoice) {
        case 'rock':
            return humanChoice === 'paper' || humanChoice === 'spock';
        case 'paper':
            return humanChoice === 'scissors' || humanChoice === 'lizard';
        case 'scissors':
            return humanChoice === 'spock' || humanChoice === 'rock';
        case 'lizard':
            return humanChoice === 'scissors' || humanChoice === 'rock';
        case 'spock':
            return humanChoice === 'paper' || humanChoice === 'lizard';
        default:
            break;
    }
}

const isTie = (humanChoice, computerChoice) => humanChoice === computerChoice;

function playRound(humanChoice, computerChoice) {
    if (isTie(humanChoice, computerChoice)){
        console.log(`Draw! both chose ${humanChoice}`);
        humanScore += 1;
        computerScore += 1;
    }
    else if (playerWins(humanChoice, computerChoice)) {
        console.log(`Player wins! ${humanChoice} beats ${computerChoice}`);
        humanScore += 1;
    }
    else {
        console.log(`Computer wins! ${computerChoice} beats ${humanChoice}`);
        computerScore += 1;
    }
}

console.log(getComputerChoice());
// console.log(getHumanChoice());
