let humanScore = 0;
let computerScore = 0;
let winConfirm = 0;

const btnRock = document.querySelector(".btnRock");
const btnPaper = document.querySelector(".btnPaper");
const btnScissors = document.querySelector(".btnScissors");
const playAgain = document.querySelector(".playAgain");
const scoreboard = document.querySelector(".scoreboard");
const results = document.querySelector(".results");

btnRock.addEventListener("click", playRoundRock);
btnPaper.addEventListener("click", playRoundPaper);
btnScissors.addEventListener("click", playRoundScissors);
playAgain.addEventListener("click", resetScore);

function scoreBoard() {
    scoreboard.textContent = `Score: Human - ${humanScore} : Computer - ${computerScore}`;
}

function winCheck() {
    if (humanScore == 5) {
        winConfirm = 1;
        results.textContent = "GAME OVER! YOU WIN!";
    }
    else if (computerScore == 5) {
        winConfirm = 1;
        results.textContent = "GAME OVER! YOU LOSE!";
    }
}

function resetScore() {
    humanScore = 0;
    computerScore = 0;
    winConfirm = 0;
    results.textContent = "START PLAYING!";
    scoreBoard();
}

function playRoundRock() {
    let computerChoice = Math.floor(Math.random() * 3);
    if (winConfirm == 0) {
        if (computerChoice == 0) {
            results.textContent = ("YOU TIE! ROCK TIES WITH ROCK!");
        }
        else if (computerChoice == 1) {
            results.textContent = ("YOU LOSE! ROCK LOSES TO PAPER");
            computerScore += 1;
        }
        else if (computerChoice == 2) {
            results.textContent = ("YOU WIN! ROCK BEATS SCISSORS");
            humanScore += 1;
        }
        scoreBoard();
        winCheck();
    }
}

function playRoundPaper() {
    let computerChoice = Math.floor(Math.random() * 3);
    if (winConfirm == 0) {
        if (computerChoice == 0) {
            results.textContent = ("YOU TIE! PAPER TIES WITH PAPER!");
        }
        else if (computerChoice == 1) {
            results.textContent = ("YOU LOSE! PAPER LOSES TO SCISSORS!");
            computerScore += 1;
        }
        else if (computerChoice == 2) {
            results.textContent = ("YOU WIN! PAPER BEATS ROCK!");
            humanScore += 1;
        }
        scoreBoard();
        winCheck();
    }
}

function playRoundScissors() {
    let computerChoice = Math.floor(Math.random() * 3);
    if (winConfirm == 0) {
        if (computerChoice == 0) {
            results.textContent = ("YOU TIE! SCISSORS TIES WITH SCISSORS!");
        }
        else if (computerChoice == 1) {
            results.textContent = ("YOU LOSE! SCISSORS LOSES TO ROCK!");
            computerScore += 1;
        }
        else if (computerChoice == 2) {
            results.textContent = ("YOU WIN! SCISSORS BEATS PAPER!");
            humanScore += 1;
        }
        scoreBoard();
        winCheck();
    }
}