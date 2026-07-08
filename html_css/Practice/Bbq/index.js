// 1. SELECT ELEMENTS OUTSIDE (Happens once when page loads)
const form = document.getElementById('registerForm');
let usernameInput = document.getElementById('username');
let emailInput = document.getElementById('email');
let passwordInput = document.getElementById('password');
let confirmPasswordInput = document.getElementById('confirm-password');



let usernameError = document.getElementById('username-error');
let emailError = document.getElementById('email-error');
let passwordError = document.getElementById('password-error');
let confirmPasswordError = document.getElementById('confirm-password-error');


form.addEventListener('submit', function (e) {
    // Stop the page from reloading automatically
    e.preventDefault();

    let isFormValid = true;

    usernameError.innerText = "";
    emailError.innerText = "";
    passwordError.innerText = "";
    confirmPasswordError.innerText = "";

    let usernameValue = usernameInput.value;
    let emailValue = emailInput.value;
    let passwordValue = passwordInput.value;
    let confirmPasswordValue = confirmPasswordInput.value;

    // User Validation
    if (usernameValue === "") {
        usernameError.innerText = "Username is required.";
        isFormValid = false;
    } else if (usernameValue.length <= 3 || usernameValue.length >= 15) {
        usernameError.innerText = "Username must be more than 3 and less than 15 characters.";
        isFormValid = false;
    }

    // Email Validation
    let emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (emailValue === "") {
        emailError.innerText = "Email is required.";
        isFormValid = false;
    } else if (emailPattern.test(emailValue) === false) {
        emailError.innerText = "Please enter a valid email address.";
        isFormValid = false;
    }

    // Password Validation
    if (passwordValue === "") {
        passwordError.innerText = "Password is required.";
        isFormValid = false;
    } else if (passwordValue.length < 4 || passwordValue.length > 8) {
        passwordError.innerText = 'Password must be more than 3 and less than 8 characters.'
        isFormValid = false;
    }

    // Password Confirmation 
    if (confirmPasswordValue === "") {
        confirmPasswordError.innerText = "Confirm password is required.";
        isFormValid = false;
    } else if (passwordValue !== confirmPasswordValue) {
        confirmPasswordError.innerText = "Passwords do not match.";
        isFormValid = false;
    }

    if (isFormValid === true) {
        usernameInput.value = ''
        emailInput.value = ''
        passwordInput.value = ''
        confirmPasswordInput.value = ''
        alert('Registration Successful!')
    }
});