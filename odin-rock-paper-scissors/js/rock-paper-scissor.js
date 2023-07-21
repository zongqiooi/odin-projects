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
        return "It is a Draw!"
    } else if ((playerSelection === "rock" && computerSelection === "scissor") || (playerSelection === "paper" && computerSelection === "rock") || (playerSelection === "scissor" && computerSelection === "paper")) {
        return `You Win! ${playerSelectionModified} beats ${computerSelectionModified}!`; 
    } else {
        return `You Lose! ${computerSelectionModified} beats ${playerSelectionModified}!`; 
    }
}

let playerSelection = getPlayerChoice(); 
let computerSelection = getComputerChoice(); 
let result = playRound(playerSelection, computerSelection); 


console.log(playerSelection); 
console.log(computerSelection); 
console.log(result); 
