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
    
    if (playerSelection === computerSelection) {
        console.log("It is a Draw!"); 
        return 0 
    } else if ((playerSelection === "rock" && computerSelection === "scissor") || (playerSelection === "paper" && computerSelection === "rock") || (playerSelection === "scissor" && computerSelection === "paper")) {
        console.log(`You Win! ${playerSelectionModified} beats ${computerSelectionModified}!`); 
        return 1
    } else {
        console.log(`You Lose! ${computerSelectionModified} beats ${playerSelectionModified}!`); 
        return -1 
    }
}

function game() {
    let playerScore = 0; 
    let computerScore = 0; 

    for (let i = 0; i < 5; i++) {
        let playerSelection = getPlayerChoice(); 
        let computerSelection = getComputerChoice(); 
        let result = playRound(playerSelection, computerSelection); 

        if (result === 0) {
            console.log(`Round ${i + 1} result: It is a Draw!`); 
        } else if (result === 1) {
            console.log(`Round ${i + 1} result: Player Wins!`); 
            playerScore += 1;
        } else {
            console.log(`Round ${i + 1} result: Computer Wins!`); 
            computerScore += 1; 
        }
    }

    if (playerScore > computerScore) {
        console.log("Final Winner: Player!");
    } else if (computerScore > playerScore) {
        console.log("Final Winner: Computer!");
    } else {
        console.log("Final Winner: It is a Draw!"); 
    }
}

game(); 