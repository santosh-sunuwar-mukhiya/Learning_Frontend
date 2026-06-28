// alert("hello world..")

const characters = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9","~","`","!","@","#","$","%","^","&","*","(",")","_","-","+","=","{","[","}","]",",","|",":",";","<",">",".","?","/"];

const passLengthInput = document.getElementById("pass-length");
const passwordRegEl = document.getElementById("passwordregular-el");
const passwordMixedEl = document.getElementById("passwordmixed-el");
const btnEl = document.getElementById("btn")
const containerEl = document.getElementById("container")
const logoEl = document.getElementsByClassName("logo")[0];
const subEl = document.getElementsByClassName("subheading")[0];

function darkLight() {
    // Toggle the class on the body
    document.body.classList.toggle("light-theme");
    
    // Check if the theme is active to change the button text
    if (document.body.classList.contains("light-theme")) {
        btnEl.innerText = "Dark";
    } else {
        btnEl.innerText = "Light";
    }
}

// console.log(characters.length)

function generatePassword() {
    const pwdLen = Number(passLengthInput.value);
    if (!pwdLen || pwdLen <= 3 || pwdLen > 15) {
        alert("Please enter a valid password length greater than 3 and less than 15.");
        return;
    }

    let pass = "";
    let pass2 = "";
    for (let i = 0; i < pwdLen; i++) {
        const num = Math.floor(Math.random() * characters.length);
        const num2 = Math.floor(Math.random() * characters.length);
        pass += characters[num];
        pass2 += characters[num2];
    }

    passwordRegEl.textContent = pass;
    passwordMixedEl.textContent = pass2;
}

async function copyPassword(elementId) {
    const textElement = document.getElementById(elementId);
    const textToCopy = textElement.textContent;

    // Prevent copying if the box is empty
    if (!textToCopy || textToCopy === "Copied!") {
        return; 
    }

    try {
        // This is the standard API to copy to the clipboard
        await navigator.clipboard.writeText(textToCopy);
        
        // Show the "Copied" message
        textElement.textContent = "Copied!";
        
        // Change it back to the password after 1500 milliseconds (1.5 seconds)
        setTimeout(() => {
            textElement.textContent = textToCopy;
        }, 1500);
        
    } catch (err) {
        console.error("Failed to copy password: ", err);
    }
}