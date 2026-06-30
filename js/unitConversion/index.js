// alert("hello js")
let userInput = 0;
const btnEl = document.getElementById("btn")
const inputEl = document.getElementById("input")
const lengthEl = document.getElementById("length-value")
const volumeEl = document.getElementById("volume-value")
const massEl = document.getElementById("mass-value")

btnEl.addEventListener("click", function(){
    userInput = Number(inputEl.value)
    render(userInput)
})

function render(num)
{
    // Meters to Feet
    let feet = (num * 3.28084).toFixed(3);
    // Feet to Meters
    let meters = (num * 0.3048).toFixed(3);
    lengthEl.innerText = `${num} meters = ${feet} feet | ${num} feet = ${meters} meters `

    // Liters to Gallons (US)
    let gallons = (num * 0.264172).toFixed(3);
    // Gallons to Liters
    let liters = (num * 3.78541).toFixed(3);
    volumeEl.innerText = `${num} liters = ${gallons} gallons | ${num} gallons = ${liters} liters `

    // Kilograms to Pounds
    let pounds = (num * 2.20462).toFixed(3);
    // Pounds to Kilograms
    let kilograms = (num * 0.453592).toFixed(3);
    massEl.innerText = `${num} kilograms = ${pounds} pounds | ${num} pounds = ${kilograms} kilograms `
}