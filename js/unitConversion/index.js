// alert("hello js")
let userInput = 0;
const btnEl = document.getElementById("btn")
const inputEl = document.getElementById("input")
const valueEl = document.getElementById("length-value")

btnEl.addEventListener("click", function(){
    userInput = Number(inputEl.value).toFixed(3)
    render(userInput)
})

function render(num)
{
    // Meters to Feet
    let feet = (num * 3.28084).toFixed(3);
    // Feet to Meters
    let meters = (num * 0.3048).toFixed(3);
    valueEl.innerText = `${num} meters = ${feet} feet | ${num} feet = ${meters} meters `
    // Liters to Gallons (US)
    let gallons = num * 0.264172;
    // Gallons to Liters
    let liters = num * 3.78541
    valueEl.innerText = `${num} meters = ${feet} feet | ${num} feet = ${meters} meters `
    // // Kilograms to Pounds
    // let pounds = num * 2.20462
    // // Pounds to Kilograms
    // let kilograms = num * 0.453592
    valueEl.innerText = `${num} meters = ${feet} feet | ${num} feet = ${meters} meters `
}