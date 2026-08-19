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
let computerChoice = "";
let round = 0;

function setRandomComputerChoice() {
  switch (Math.ceil(Math.random() * 5)) {
    case 1:
      computerChoice = "rock";
      break;
    case 2:
      computerChoice = "paper";
      break;
    case 3:
      computerChoice = "scissors";
      break;
    case 4:
      computerChoice = "lizard";
      break;
    default:
      computerChoice = "spock";
      break;
  }
}

function playerWins() {
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

function setEnemyChoiceImage() {
  const enemyChoiceImg = combatBox.firstElementChild.lastElementChild;
  if (computerChoice === "spock") {
    enemyChoiceImg.src = "./assets/mirror-spock.png";
  } else if (computerChoice === "") {
    enemyChoiceImg.src = "./assets/placeholder.svg";
  } else {
    enemyChoiceImg.src = `./assets/${computerChoice}.png`;
  }
}

function setBoxBorderColor(element, roundDecision) {
  let color;
  switch (roundDecision) {
    case 0: // player lost
      color = "#ff1d1d";
      break;
    case 1: // player won
      color = "#19ff44";
      break;
    case 2: // tie
      color = "#9d1cf9";
      break;
    default: // reset game
      color = "#00eaff";
      break;
  }
  element.style.borderColor = color;
  element.firstElementChild.style.borderRightColor = color;
}

function endGame(result) {
  if (result === 0) {
    resultsBox.firstElementChild.textContent = "You Lost :(";
  } else {
    resultsBox.firstElementChild.textContent = "You Win!";
  }
  playBox.removeEventListener("click", handleChoice);
  resultsBox.hidden = false;
  resultsBox.focus();
}

function displayUpdatedRoundNumber() {
  roundNumberPara.textContent = `Round: ${round}`;
}

function updateCommentary(roundResult) {
  switch (roundResult) {
    case 0:
      commentaryPara.textContent = comments.playerChoice[`lose${computerChoice}`];
      break;
    case 1:
      commentaryPara.textContent = comments.playerChoice[`win${computerChoice}`];
      break;
    case 2:
      commentaryPara.textContent =
        "It seems neither has bested the other. Both survive this round.";
      break;
    default:
      commentaryPara.textContent = "Begin your move player.";
      break;
  }
}

function displayUpdatedLives() {
  livesInfoPara.textContent = `Your lives: ${playerLives} | Enemy lives: ${computerLives}`;
}

function playRound() {
  round++;
  displayUpdatedRoundNumber();
  setEnemyChoiceImage();

  if (playerChoice === computerChoice) {
    // tie
    setBoxBorderColor(combatBox, 2);
    commentaryPara.textContent = "It seems neither has bested the other. Both survive this round.";
  } else if (playerWins(playerChoice, computerChoice)) {
    computerLives -= 1;
    setBoxBorderColor(combatBox, 1);
    commentaryPara.textContent = comments.playerChoice[`win${computerChoice}`];
  } else {
    // player loses
    playerLives -= 1;
    setBoxBorderColor(combatBox, 0);
    commentaryPara.textContent = comments.playerChoice[`lose${computerChoice}`];
  }

  livesInfoPara.textContent = `Your lives: ${playerLives} | Enemy lives: ${computerLives}`;
  if (playerLives <= 0) {
    endGame(0);
  } else if (computerLives <= 0) {
    endGame(1);
  }
}

function handleChoice(e) {
  if (e.target.tagName === "IMG") {
    playerChoice = e.target.parentElement.id;
  } else if (e.target.tagName === "BUTTON") {
    playerChoice = e.target.id;
  } else {
    return;
  }
  playBox.focus();
  playRound(playerChoice, getComputerChoice());
}

function handlePlayAgainRequest(e) {
  console.log(e);
  resultsBox.hidden = true;
  round = 0;
  computerLives = 5;
  playerLives = 5;
  playerChoice = "";
  setBoxBorderColor(combatBox, -1);
  playBox.addEventListener("click", handleChoice);
  playBox.focus();
}

const playBox = document.querySelector(".play-box");
const combatBox = playBox.nextElementSibling;
const [roundNumberPara, livesInfoPara, commentaryPara] = combatBox.lastElementChild.children;
const resultsBox = combatBox.nextElementSibling;
const playAgainBtn = resultsBox.lastElementChild;

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
