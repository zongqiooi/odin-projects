// ONE of something = use Module Pattern 
// MULTIPLE of something = use Factories Function 

let GameBoard = (() => {
    let gameboard = ["X", "O", "X", "O", "X", "O", "X", "O", "X"]; 
    let gridItems = document.querySelectorAll(".grid-item");

    gridItems.forEach((gridItem, index) => {
        gridItem.textContent = gameboard[index]; 
    }); 

    return {};
})(); 

function Player() {
    return {};
}
