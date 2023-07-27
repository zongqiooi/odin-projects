let password = document.querySelector("#password"); 
let confirmPassword = document.querySelector("#confirm-password"); 
let errorMessage = document.querySelector(".error-message"); 

console.log("this is password"); 
console.log(password); 
console.log("this is password content"); 
console.log(password.textContent);
if (password.name && confirmPassword.name) {
    if (password !== confirmPassword) {
        errorMessage.style.display = "block"; 
    } else {
        errorMessage.style.display = "none"; 
    }
}
