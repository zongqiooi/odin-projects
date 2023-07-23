let numStack = [];
let currOperation; 
let currNum = ""; 
let numbers = document.querySelectorAll(".number"); 
let display = document.querySelector(".calculator-display"); 
let operators = document.querySelectorAll(".operator"); 
let clearBtn = document.querySelector(".clear"); 
let displayCache = document.querySelector(".calculator-display-cache"); 

function add(a, b) {
    let total = 0; 
    total = a + b; 
    return total; 
}

function subtract(a, b) {
    total = a - b; 
    return total; 
}

function multiply(a, b) {
    total = a * b; 
    return total; 
}

function divide(a, b) {
    total = a / b; 
    return total; 
}

function operate(operation, a, b) {
    if (operation === "+") {
        return add(a, b); 
    } else if (operation === "-") {
        return subtract(a, b); 
    } else if (operation === "*") {
        return multiply(a, b); 
    } else if (operation === "/") {
        return divide(a, b); 
    }
}

function clear() {
    currNum = ""; 
    numStack = [];
    currOperation = ""; 
    displayCache.textContent= ""; 
    display.textContent = ""; 
}

numbers.forEach((number) => {
    number.addEventListener("click", () => {
        if ((number.textContent !== ".") || (number.textContent === "." && currNum.includes(".") === false)) {
            currNum += number.textContent; 
        }
        display.textContent = currNum; 
    })
})

operators.forEach((operator) => {
    operator.addEventListener("click", () => {
        if ((operator.textContent !== "=" && currNum !== "") && numStack.length < 1) {
            displayCache.textContent = `${currNum} ${operator.textContent}`;
            numStack.push(parseFloat(currNum)); 
            currNum = ""; 
            currOperation = operator.textContent; 
        } else if ((operator.textContent === "=" && numStack.length > 0) || (operator.textContent !== "=" && currNum !== "")){
            numStack.push(parseFloat(currNum)); 
            currNum = ""; 
            
            let result;
            let b = numStack.pop(); 
            let a = numStack.pop(); 
            
            if (currOperation === "/" && b === 0) {
                alert("You can't divide by 0!");
                currNum = ""; 
                numStack = [];
                currOperation = "";  
            } else {
                displayCache.textContent = `${a} ${currOperation} ${b}`; 
                result = operate(currOperation, a, b);
                numStack.push(parseFloat(result)); 

                if (result.toString().includes(".") === true) {
                    display.textContent = result.toFixed(3); 
                } else {
                    display.textContent = result; 
                }
                
                if (operator.textContent !== "=") {
                    currOperation = operator.textContent; 
                }    
            }
        } else {
            currOperation = operator.textContent; 
        } 
    })
})

clearBtn.addEventListener("click", () => {
    clear(); 
})

document.addEventListener("keydown", (event) => {
    var name = event.key;

    if (name >= "0" && name <= "9" || name === ".") {
        if ((name !== ".") || (name === "." && currNum.includes(".") === false)) {
            currNum += name; 
        }
        display.textContent = currNum; 
    } else if (name === "+" || name === "-" || name === "*" || name === "/" || name === "=" || name === "Enter") {
        if ((name !== "=" && currNum !== "") && numStack.length < 1) {
            displayCache.textContent = `${currNum} ${name}`;
            numStack.push(parseFloat(currNum)); 
            currNum = ""; 
            currOperation = name; 
        } else if ((name === "=" && numStack.length > 0) || (name !== "=" && currNum !== "")){
            numStack.push(parseFloat(currNum)); 
            currNum = ""; 
            
            let result;
            let b = numStack.pop(); 
            let a = numStack.pop(); 
            
            if (currOperation === "/" && b === 0) {
                alert("You can't divide by 0!");
                currNum = ""; 
                numStack = [];
                currOperation = "";  
            } else {
                displayCache.textContent = `${a} ${currOperation} ${b}`; 
                result = operate(currOperation, a, b);
                numStack.push(parseFloat(result)); 

                if (result.toString().includes(".") === true) {
                    display.textContent = result.toFixed(3); 
                } else {
                    display.textContent = result; 
                }
                
                if (name !== "=") {
                    currOperation = name; 
                }    
            }
        } else {
            currOperation = name; 
        } 
    } else if (name === "Backspace") {
        clear(); 
    }
}, false);

