"use strict";
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

const quotes = [
  `"We're human beings with the blood of a million savage years on our hands, but we can stop it. We can admit that we're killers, but we're not going to kill today. That's all it takes. Knowing that we won't kill today."
    
    -Captain James T. (or R) Kirk, "Taste of Armageddon" `,

  `"It is possible to commit no mistakes and still lose. That is not a weakness. That is life."
  
  -Captain Jean-Luc Picard, "TNG: Peak Performance"`,

  `"I cannot defeat this Klingon. I can only kill him. And that no longer holds my interest."
  
  -First Ikat'ika Jem'Hadar, "DS9: By Inferno's Light"`,

  `"Let me tell you something about hu-mons, nephew. They're a wonderful, friendly people as long as their bellies are full and their holosuites are working, but take away their creature comforts, deprive them of food, sleep, sonic showers, put their lives in jeopardy over an extended period of time and those same, friendly, intelligent, wonderful people will become as nasty and as violent as the most bloodthirsty Klingon."

  -Quark, "The Siege of AR-558"`,

  `"If there is to be a brave new world, our generation is going to have the hardest time living in it."
  
  -Chancellor Gorkon, "Star Trek The Undiscovered Country."`,

  `'You don’t need a ship to believe in what it stands for."
  
  -Dr. Boons, "Star Trek: Prodigy, All The World’s A Stage"`,

  `"No man should understand where his dreams come from, Data."
  
  -Soong to Data, "Birthright pt. 1"`,

  `"The needs of the many outweigh the needs of the few, or the one."
  
  -Chief Science Officer Spock`,

  `"Logic is the beginning of wisdom, not the end."
  
  -Chief Science Officer Spock`,

  `"You know that pain and guilt can't be taken away with the wave of a magic wand! They're the things we carry with us, the things that make us who we are. If we lose them, we lose ourselves. I don't want my pain taken away, I need my pain!”

  -Captain James T. Kirk, "Star Trek V: The final Frontier"`,

  `"It is possible to commit no mistakes and still lose. That is not a weakness. That is life."
  
  -Captain Jean-Luc Picard to Data, "TNG: Peak Performance"`,

  `"To seek out new life and new civilizations."
  
  -Starfleet mission statement`,
];

const comments = {
  rock: {
    winscissors: "Your rock crushed the enemy Scissors! Huzzahh!",
    winlizard: "Your rock crushed the lizard-like Gorn. Gorn begone!",
    losepaper: "Damn! Evil Spock covered your rock with paper! It wasn't effective.",
    losespock: "Uh-oh, mirror spock vaporized your rock with his phaser.",
  },
  paper: {
    winrock: "Success! you used your paper to deflect that rock!",
    winspock:
      "Haha!! your paper's logic is one mirror Spock couldn't argue against! You've outwitted him.",
    losescissors: "Nooo!, mirror Spock cut your paper up.",
    loselizard: "Man, the stupid Gorn ate your paper.",
  },
  scissors: {
    winpaper: "Yes, we don't care about your paper mirror Spock!",
    winlizard: "Off with the Gorn's tail!",
    loserock: "Primitive, yet effective. A rock smashed your scissors.",
    losespock: "Hmm, it seems mirror spock himself smashed your scissors.",
  },
  lizard: {
    winpaper: "Finally something a Gorn's useful for.",
    winspock:
      "Ooof, I wouldn't wanna be bit by a Gorn either. Mirror spock was poisoned by your Gorn.",
    losescissors: "Mirror Spock cut your Gorn's tail, its out of control!",
    loserock: "THUDD!, the sound of your Gorn hitting the floor as the rock hit its head.",
  },
  spock: {
    winrock: "Spock set his phaser to vaporize. The rock has been obliterated!",
    winscissors:
      "Mirror spock couldn't find his scissors. Spock probably hid them. Its only logical.",
    losepaper: "Rats, you can't argue with that logic Mr. Spock",
    loselizard: "Oh no! Run Mr. Spock, that Gorn's after you!",
  },
};

let playerLives = 5;
let computerLives = 5;
let playerChoice = "";
let round = 0;

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

function playerWins(playerChoice, computerChoice) {
  switch (computerChoice) {
    case "rock":
      return playerChoice === "paper" || playerChoice === "spock";
    case "paper":
      return playerChoice === "scissors" || playerChoice === "lizard";
    case "scissors":
      return playerChoice === "spock" || playerChoice === "rock";
    case "lizard":
      return playerChoice === "scissors" || playerChoice === "rock";
    case "spock":
      return playerChoice === "paper" || playerChoice === "lizard";
    default:
      break;
  }
}

const isTie = (playerChoice, computerChoice) => playerChoice === computerChoice;

function playRound(humanChoice, computerChoice) {
  if (isTie(humanChoice, computerChoice)) {
    console.log(`Draw! both chose ${humanChoice}`);
    humanScore += 1;
    computerScore += 1;
  } else if (playerWins(humanChoice, computerChoice)) {
    console.log(`Player wins! ${humanChoice} beats ${computerChoice}`);
    humanScore += 1;
  } else {
    console.log(`Computer wins! ${computerChoice} beats ${humanChoice}`);
    computerScore += 1;
  }
}

function handleChoice(e) {
    //TODO
}

function handlePlayAgainRequest(each) {
    //TODO
}

const playBox = document.querySelector(".play-box");
playBox.addEventListener("click", handleChoice);
playAgainBtn.addEventListener("click", handlePlayAgainRequest);

// function playGame() {
//   while (round < 5) playRound(getHumanChoice(), getComputerChoice());

//   if (humanScore === computerScore)
//     console.log(`Its a tie! ${humanScore} - ${computerScore}`);
//   else if (humanScore > computerScore)
//     console.log(`Player wins game! ${humanScore} - ${computerScore}. Yay :) `);
//   else
//     console.log(
//       `Player loses game! ${humanScore} - ${computerScore}. Better luck next time :/`,
//     );

//   console.log("Refresh page to play again!");
// }

// playGame();
