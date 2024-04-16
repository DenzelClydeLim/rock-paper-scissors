/*
SET randomNum and CALL Math.random and multiply by 3 added by 1
CALL Math.floor of randomNum
IF randomNum equals 1 THEN
    SET move to "Rock"
ELSEIF randomNum equals 2 THEN
    SET move to "Paper"
ELSE
    SET move to "Scissors"
*/
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

/*
READ and SET input to choice
CALL toUpperCase() on choice
RETURN choice
*/

function getPlayerChoice() {
    let choice;
    while (choice !== "rock" && choice !== "paper" && choice !== "scissors") {
        choice = prompt("Rock, paper or scissors?").toLowerCase();
    }
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
    let score = 0;
    while (i < 5) {
        result = playRound(getPlayerChoice(), getComputerChoice());
        console.log(result);
        result === "You won!" ? ++score : null;
        console.log(`Score: ${score}`);
        i++;
    }
    if (score >= 3) {
        console.log("You are the champion!");
    } else {
        console.log("Computer wins!");
    }
}
playGame();


/*
IF playerMove equals rock and computerMove equals scissors
    THEN display "You won!"
ELSE IF playerMove equals rock and computerMove equals paper
    THEN display "You lost!"
ELSE IF playerMove equals rock and computerMove equals rock
    THEN display "Tie! No point gained!"
*/
