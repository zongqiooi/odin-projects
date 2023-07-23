let squareNum = 16; 
let container = document.querySelector(".container"); 

function generateGrid() {
    for (let i = 0; i < squareNum; i++) {
        let rowDiv = document.createElement("div");
        rowDiv.classList.add(`row-${i + 1}`); 
        rowDiv.classList.add(`row-square`); 
        rowDiv.style.display = "flex"; 

        for (let j = 0; j < squareNum; j++) {
            let div = document.createElement("div");
            div.classList.add("square"); 
            div.style.backgroundColor = "black"; 
            div.style.border = "1px solid white"; 
            rowDiv.appendChild(div); 
        }

        container.appendChild(rowDiv); 
    }

    let squares = document.querySelectorAll(".square"); 

    squares.forEach((square) => {
        square.addEventListener("mousemove", () => {
            square.style.backgroundColor = "pink"; 
        })
    })

    let button = document.querySelector(".generate-button"); 

    button.addEventListener("click", () => {
        squareNum = prompt("Enter the number of squares per side for new grid:"); 
        deletePreviousGrid(); 
        generateGrid(); 
    });
}

function deletePreviousGrid() {
    while (container.firstChild) {
        container.removeChild(container.firstChild);
    }
}

generateGrid(); 