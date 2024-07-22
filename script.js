const playMoveContainer = document.querySelector("#playSectMoveContainer");
const playMoveDesc = document.querySelector("#playSectTitle");
const oppMoveDesc = document.querySelector("#oppSectMove");
const scoreDesc = document.querySelector("#oppSectScore");
const roundDesc = document.querySelector("#oppSectMatchNum");
const oppImg = document.querySelector("#oppSectImg");
const gameTitle = document.querySelector("#navBarLeft");
let playerMove = "";
let oppMove = "";
let playerScore = 0;
let oppScore = 0;
let outcome = "";
let seenWon = false;

const restartBtn = document.createElement("button");
restartBtn.textContent = "Restart the game";
restartBtn.style.border = "1px solid black";
restartBtn.className = "navBarRestartBtn";
restartBtn.style.display = "none";
restartBtn.addEventListener("click", () => {
    playerScore = 0;
    oppScore = 0;
    playMoveDesc.textContent = "Time to choose your fighter!";
    oppMoveDesc.textContent = "Neeko  is waiting for your move..."
    roundDesc.textContent = "All is at peace.";
    scoreDesc.textContent = `Player: ${playerScore} | Neeko: ${oppScore}`;
    oppImg.src = "./images/cat-bored-pfp.jpg";
    seenWon = false;
    restartBtn.style.display = "none";
})

gameTitle.appendChild(restartBtn);
playMoveContainer.addEventListener("click", (e) => {
    switch (e.target.id) {
        case "playSectRockBtn":
            console.log(1);
            playerMove = "rock";
            break;
        case "playSectPaperBtn":
            playerMove = "paper";
            break;
        case "playSectScissorsBtn":
            playerMove = "scissors";
            break;
    }
    getComputerChoice();
    playRound();
})


function getComputerChoice() {
    const num = Math.floor(Math.random() * 3);
    switch (num) {
        case 0:
            oppMove = "rock";
            break;
        case 1:
            oppMove = "paper";
            break;
        case 2:
            oppMove = "scissors";
            break;
    }
}

function playRound() {
    playMoveDesc.textContent = `You chose ${playerMove}!`;
    oppMoveDesc.textContent = `Neeko chose ${oppMove}`;
    if (playerMove === "rock") {
        if (oppMove === "rock") {
            outcome = "draw";
        } else if (oppMove === "paper") {
            outcome = "lose";
        } else {
            outcome = "win";
        }
    } else if (playerMove === "paper") {
        if (oppMove === "paper") {
            outcome = "draw";
        } else if (oppMove === "scissors") {
            outcome = "lose";
        } else {
            outcome = "win";
        }
    } else if (playerMove === "scissors") {
        if (oppMove === "scissors") {
            outcome = "draw";
        } else if (oppMove === "rock") {
            outcome = "lose";
        } else {
            outcome = "win";
        }
    }
    if (outcome === "draw") {
        roundDesc.textContent = "Match Result: Draw!";
        oppImg.src = "./images/cat-bored-pfp.jpg";
    } else if (outcome === "lose") {
        roundDesc.textContent = "Match Result: Opponent Won!";
        scoreDesc.textContent = `Player: ${playerScore} | Neeko: ${++oppScore}`;
        oppImg.src = "./images/cat-celebrate-pfp.jpg";
    } else if (outcome === "win") {
        roundDesc.textContent = "Match Result: You Won!";
        scoreDesc.textContent = `Player: ${++playerScore} | Neeko: ${oppScore}`;
        oppImg.src = "./images/cat-sad-pfp.jpg";
    }

    if (playerScore === 5 || oppScore === 5) {
        if (playerScore === 5 && !seenWon) {
            roundDesc.textContent += ` With a score of 5, you have won the game!`;
        } else if (oppScore === 5 && !seenWon) {
            roundDesc.textContent += " In an unfortunate turn of events, Neeko has won the game.";
        }
        seenWon = true;
        restartBtn.style.display = "inline";
    }
}