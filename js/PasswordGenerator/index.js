// alert("hello world..")

const characters = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9","~","`","!","@","#","$","%","^","&","*","(",")","_","-","+","=","{","[","}","]",",","|",":",";","<",">",".","?","/"];

const passLengthInput = document.getElementById("pass-length");
const passwordRegEl = document.getElementById("passwordregular-el");
const passwordMixedEl = document.getElementById("passwordmixed-el");

console.log(characters.length)

function generatePassword() {
    const pwdLen = Number(passLengthInput.value);
    if (!pwdLen || pwdLen <= 0) {
        alert("Please enter a valid password length");
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