function getPlayerChoice() {
    let option = prompt("Enter your option"); 
    return option.toLowerCase(); 
}

function getComputerChoice() {
    let options = ["rock", "paper", "scissor"]; 
    let randomIndex = Math.floor((Math.random() * 3));
    return options[randomIndex]; 
}

function playRound(playerSelection, computerSelection) {
    let playerSelectionModified = playerSelection.slice(0, 1).toUpperCase() + playerSelection.slice(1); 
    let computerSelectionModified = computerSelection.slice(0, 1).toUpperCase() + computerSelection.slice(1); 
    let roundResult = document.querySelector(".round-result"); 

    if (playerSelection === computerSelection) {
        roundResult.textContent = "It is a Draw!"; 
        return 0;
    } else if ((playerSelection === "rock" && computerSelection === "scissor") || (playerSelection === "paper" && computerSelection === "rock") || (playerSelection === "scissor" && computerSelection === "paper")) {
        roundResult.textContent = `You Win! ${playerSelectionModified} beats ${computerSelectionModified}!`; 
        return 1;
    } else {
        roundResult.textContent = `You Lose! ${computerSelectionModified} beats ${playerSelectionModified}!`; 
        return -1; 
    }
}

function game() {
    let playerScore = 0; 
    let computerScore = 0; 
    let round = 0; 
    let buttons = document.querySelectorAll("button"); 

    buttons.forEach((button) => {
        button.addEventListener("click", () => {
            let finalResult = document.querySelector(".final-result");
            
            // Game reset when player or computer wins 
            if (playerScore === 5 || computerScore === 5) {
                playerScore = 0; 
                computerScore = 0; 
                round = 0; 
                finalResult.textContent = "";
            }

            let playerSelection = button.className; 
            let computerSelection = getComputerChoice(); 
            let result = playRound(playerSelection, computerSelection);
            let runningScore = document.querySelector(".running-score"); 

            if (result === 1) {
                playerScore += 1;
            } else if (result === -1) {
                computerScore += 1; 
            }
            
            console.log("player score " + playerScore); 
            console.log("computer score " + computerScore); 

            runningScore.textContent = `Player Score: ${playerScore}   Computer Score: ${computerScore}`; 

            if (playerScore === 5) {
                finalResult.textContent = "Final Winner: Player!"; 
            } else if (computerScore === 5) {
                finalResult.textContent = "Final Winner: Computer!";
            }

            round += 1; 
        });
    });
}

game(); 