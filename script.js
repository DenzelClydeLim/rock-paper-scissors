function getComputerChoice() {
    let randomNum = Math.floor(Math.random() * 3 + 1);
    let move;
    if (randomNum === 1) {
        move = "rock";
    } else if (randomNum === 2) {
        move = "paper";
    } else {
        move = "scissors";
    }
    (move);
    console.log(`Opponent picked: ${move.charAt(0).toUpperCase() + move.slice(1)}`);
    return move;
}

function getPlayerChoice() {
    let choice;
    while (choice !== "rock" && choice !== "paper" && choice !== "scissors") {
        choice = prompt("Rock, paper or scissors?").toLowerCase();
    }
    console.log(`You picked: ${choice.charAt(0).toUpperCase() + choice.slice(1)}`);
    return choice;
}

function playRound(playerMove, computerMove) {
    if (playerMove === "rock") {
        if (computerMove === "scissors") {
            return "You won!";
        } else if (computerMove === "paper") {
            return "You lost!";
        } else {
            return "Tie! No point gained!";
        }
    } else if (playerMove === "paper") {
        if (computerMove === "rock") {
            return "You won!";
        } else if (computerMove === "scissors") {
            return "You lost!";
        } else {
            return "Tie! No point gained!";
        }
    } else if (playerMove === "scissors") {
        if (computerMove === "paper") {
            return "You won!";
        } else if (computerMove === "rock") {
            return "You lost!";
        } else {
            return "Tie! No point gained!";
        }
    }
}

function playGame() {
    let i = 0;
    let result;
    let playerScore = 0;
    let computerScore = 0;
    while (i < 5) {
        result = playRound(getPlayerChoice(), getComputerChoice());
        console.log(result);
        result === "You won!" ? ++playerScore : result === "You lost!" ? ++computerScore : null;
        console.log(`Player Score: ${playerScore}`);
        console.log(`Computer Score: ${computerScore}`);
        i++;
    }
    if (playerScore > computerScore) {
        return "You are the champion!";
    } else if (computerScore > playerScore) {
        return "Computer wins!";
    } else if (playerScore === computerScore) {
        return "It's a tie! You're both winners";
    } else {
        return "Woah! Nobody scored a point.";
    }
}
console.log(playGame());
