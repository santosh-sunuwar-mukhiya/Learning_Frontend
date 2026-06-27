// alert("Hello world")

let messageEl = document.getElementById("message-el")
let cardEl = document.getElementById("cards-el")
let sumEl = document.getElementById("sum-el")
let playerEl = document.getElementById("player-el")
let cards = []
let sum = 0
let message = ""
let isAlive = false
let hasBlackJack = false

messageEl.textContent = "Do you want to play?"

let player = {
    "name":"Santosh",
    "chips": 200
}

playerEl.textContent = player.name + ": $" + player.chips;

function randomNumber()
{
    let num = Math.floor(Math.random() * 13) + 1;
    if(num > 10)
    {
        return 10
    }else if( num === 1){
        return 11
    }else{
        return num
    }
}

function startGame()
{
    isAlive = true
    let firstCard = randomNumber()
    let secondCard = randomNumber()
    cards = [firstCard, secondCard]
    sum = firstCard + secondCard
    renderGame()
}

function renderGame(){
    cardEl.textContent = "Cards: "
    for(let i = 0; i < cards.length; i++){
        cardEl.textContent += cards[i] + " ";
    }
    sumEl.textContent = "Sum: " + sum;

    if(sum < 21){
        message = "Do you want to draw a new card?"
    }else if(sum === 21){
        message = "You've got a Black Jack!"
        hasBlackJack = true
    }else{
        message = "You'are out of game!"
        isAlive = false
    }

    messageEl.textContent = message;
}

function newCard()
{
    if(isAlive === true && hasBlackJack === false){
        let newCard = randomNumber()
        cards.push(newCard)
        sum += newCard
        renderGame()
    }
}