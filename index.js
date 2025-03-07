//Rock Paper Scissors
// Deklarasi dan ambil element
const choices = ["rock", "paper", "scissors"];
const playerDisplay = document.getElementById("playerDisplay");
const computerDisplay = document.getElementById("computerDisplay");
const resultDisplay = document.getElementById("resultDisplay");
const playerScoreDisplay = document.getElementById("playerScoreDisplay");
const computerScoreDisplay = document.getElementById("computerScoreDisplay");

//
let playerScore = 0;
let computerScore = 0;

function playGame(playerChoice) {
  //Random Pilihan Komputer
  const computerChoice = choices[Math.floor(Math.random() * 3)];
  //Test pilihan komputer di console log
  //console.log(computerChoice);

  //LOGIKA
  let result = "";
  if (playerChoice === computerChoice) {
    result = "IT'S A TIE!";
  } else {
    switch (playerChoice) {
      case "rock":
        result = computerChoice === "scissors" ? "YOU WIN!" : "YOU LOSE!";
        break;
      case "paper":
        result = computerChoice === "rock" ? "YOU WIN!" : "YOU LOSE!";
        break;
      case "scissors":
        result = computerChoice === "paper" ? "YOU WIN!" : "YOU LOSE!";
        break;
    }
  }

  playerDisplay.textContent = `PLAYER: ${playerChoice}`;
  computerDisplay.textContent = `COMPUTER: ${computerChoice}`;
  resultDisplay.textContent = result;

  resultDisplay.classList.remove("winText", "loseText");

  switch (result) {
    case "YOU WIN!":
      resultDisplay.classList.add("winText");
      playerScore++;
      playerScoreDisplay.textContent = playerScore;

      break;
    case "YOU LOSE!":
      resultDisplay.classList.add("loseText");
      computerScore++;
      computerScoreDisplay.textContent = computerScore;
      break;
  }
}
