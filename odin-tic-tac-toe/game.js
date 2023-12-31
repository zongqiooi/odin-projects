// ONE of something = use Module Pattern 
// MULTIPLE of something = use Factories Function 

let playerOneName = "Player 1"; 
let playerTwoName = "Player 2"; 

let Game = (() => {
    let turns = 0; 
    let gameBoard = ["", "", "", "", "", "", "", "", ""]; 
    let gridItems = document.querySelectorAll(".grid-item");

    let checkGame = () => {
        // Horizontal checking 
        let x = 0; 
        let o = 0; 
        let end = 0; 

        for (let r = 0; r < 3; r++) {
            x = 0; 
            o = 0; 

            for (let c = 0; c < 3; c++) {
                if (gameBoard[(r * 3) + c] === playerOne.marker) {
                    x += 1; 
                } else if (gameBoard[(r * 3) + c] === playerTwo.marker) {
                    o += 1; 
                }
            }

            if (x === 3) {
                console.log(`${playerOne.name} Wins!`);
                end = 1; 
            } else if (o === 3) {
                console.log(`${playerTwo.name} Wins!`);
                end = 2; 
            }   
        }

        // Vertical checking 
        for (let c = 0; c < 3; c++) {
            x = 0; 
            o = 0; 

            for (let r = 0; r < 3; r++) {
                if (gameBoard[(r * 3) + c] === playerOne.marker) {
                    x += 1; 
                } else if (gameBoard[(r * 3) + c] === playerTwo.marker) {
                    o += 1; 
                }
            }

            if (x === 3) {
                console.log(`${playerOne.name} Wins!`);
                end = 1; 
            } else if (o === 3) {
                console.log(`${playerTwo.name} Wins!`);
                end = 2; 
            }   
        }

        // Slanted checking  
        if ((gameBoard[0] === playerOne.marker && gameBoard[4] === playerOne.marker && gameBoard[8] === playerOne.marker) || (gameBoard[2] === playerOne.marker && gameBoard[4] === playerOne.marker && gameBoard[6] === playerOne.marker)) {
            console.log(`${playerOne.name} Wins!`);
            end = 1; 
        } else if ((gameBoard[0] === playerTwo.marker && gameBoard[4] === playerTwo.marker && gameBoard[8] === playerTwo.marker) || (gameBoard[2] === playerTwo.marker && gameBoard[4] === playerTwo.marker && gameBoard[6] === playerTwo.marker)) {
            console.log(`${playerTwo.name} Wins!`);
            end = 2; 
        }
        
        if (end === 0) {   
            let empty = 0; 
            gameBoard.forEach((cell) => {
                if (cell === "") {
                    empty += 1;
                }
            }); 

            if (empty === 0) {
                console.log("It is a tie!"); 
                end = 3; 
            }
        } 

        if (end === 1 || end === 2 || end === 3) {
            let overlayContainer = document.querySelector(".overlay-container"); 
            let modalMessage = document.querySelector(".modal-message"); 

            overlayContainer.style.visibility = "visible";

            if (end === 1) {
                modalMessage.textContent = `${playerOne.name} Wins!`; 
            } else if (end === 2) {
                modalMessage.textContent = `${playerTwo.name} Wins!`; 
            } else if (end === 3) {
                modalMessage.textContent = "It is a tie!"; 
            }
        }
    }

    let updateGame = () => {
        gridItems.forEach((gridItem, index) => {
            gridItem.textContent = gameBoard[index]; 
        }); 
        
        checkGame(); 
    };
    
    let playGame = () => {
        gridItems.forEach((gridItem) => {
            gridItem.addEventListener("click", () => {
                let gridIdx = gridItem.getAttribute("id"); 
    
                while (gameBoard[gridIdx] === "") {
                    if (turns % 2 === 0) {
                        gameBoard[gridIdx] = playerOne.marker; 
                    } else {
                        gameBoard[gridIdx] = playerTwo.marker; 
                    }
                    turns += 1; 
                } 
    
                updateGame(); 
            })
        }); 

        let resetButton = document.querySelector("button"); 
        let overlayContainer = document.querySelector(".overlay-container"); 
        
        resetButton.addEventListener("click", () => {
            turns = 0; 
            gameBoard = ["", "", "", "", "", "", "", "", ""]; 

            overlayContainer.style.visibility = "hidden";
            updateGame(); 
        }); 
    }
    
    playGame(); 
})(); 

let Player = (name, marker) => {
    return {name, marker};
}

let playerOne = Player(playerOneName, "X");
let playerTwo = Player(playerTwoName, "O");
