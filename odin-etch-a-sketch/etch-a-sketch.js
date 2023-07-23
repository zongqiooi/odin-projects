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
        square.addEventListener("mouseenter", () => {
            let randomR = Math.floor(Math.random() * 255); 
            let randomG = Math.floor(Math.random() * 255); 
            let randomB = Math.floor(Math.random() * 255); 
            square.style.backgroundColor = `rgb(${randomR}, ${randomG}, ${randomB})`; 
        })
    })

    let button = document.querySelector(".generate-button"); 

    button.addEventListener("click", () => {
        let squareInput = 200; 

        while (squareInput < 1 || squareInput > 100) {
            squareInput = parseInt(prompt("Enter the number of squares per side for new grid (1 to 100):"));
        }
            
        squareNum = squareInput; 
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