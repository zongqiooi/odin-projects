let password = document.querySelector("#password"); 
let confirmPassword = document.querySelector("#confirm_password"); 
let errorMessage = document.querySelector(".error-message"); 

confirmPassword.addEventListener("keyup", () => {
    console.log(password.value); 
    console.log(confirmPassword.value); 

    if (password.value !== confirmPassword.value) {
        errorMessage.style.display = "block"; 
    } else {
        errorMessage.style.display = "none"; 
    }
});

