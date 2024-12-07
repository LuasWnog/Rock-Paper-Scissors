let humanAnswer = ""
let computerAnswer = ""
let humanScore = 0
let computerScore = 0

function getComputerChoice() {
    let computerAnswerNumber = Math.floor(Math.random() * 3)
    if (computerAnswerNumber == 0) {
        computerAnswer = "ROCK"
    }
    else if (computerAnswerNumber == 1) {
        computerAnswer = "PAPER"
    }
    else {
        computerAnswer = "SCISSORS"
    }
    return computerAnswerNumber;
}

function getHumanChoice () {
    humanAnswer = prompt("Enter your play: ").toUpperCase()
    if (humanAnswer == "ROCK") {
        return 0
    }
    else if (humanAnswer == "PAPER") {
        return 1
    }
    else if (humanAnswer == "SCISSORS") {
        return 2
    }
    else {
        alert("Your input is not valid")
    }
}

function playGame() {
    function playRound(humanChoice, computerChoice) {
        let difference = humanChoice-computerChoice
        if (difference == -2 || difference == 1) {
            console.log(`YOU WIN! ${humanAnswer} BEATS ${computerAnswer}!`)
            humanScore = humanScore + 1
        }
        else if (difference == -1 || difference == 2) {
            console.log(`YOU LOSE! ${humanAnswer} LOSES TO ${computerAnswer}`)
            computerScore = computerScore + 1
        }
        else {
            console.log(`YOU TIE! ${humanAnswer} TIES WITH ${computerAnswer}`)
        }
    }
    for (let i = 0; i < 5; i++) {
        playRound(getHumanChoice(), getComputerChoice())
        console.log(`HUMAN: ${humanScore}, COMPUTER: ${computerScore}`)
    }
}

playGame()