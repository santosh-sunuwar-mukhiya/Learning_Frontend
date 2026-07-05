// // alert("hello world")

// const numbers = [1, 2, 3, 4, 5, 6];

// // Square every number
// numbers.forEach(function(num) {
//   console.log(num * num);
// });

// // Print only even numbers
// numbers.forEach(function(num) {
//   if (num % 2 === 0) {
//     console.log(num);
//   }
// });


const titleEl = document.getElementById('title')
title.innerText = 'hello'

const btnEl = document.getElementById("btn")
function clickOn(){
  btnEl.style.backgroundColor = 'black';
  btnEl.style.color = "#fff";
  console.log("button clicked!")
}

const subtitleEl = document.getElementById('subtitle')
function changeTitle(){
  console.log("paragraph text changed")
  subtitleEl.innerText = 'Hello Javascript'
  subtitleEl.style.fontSize = '2rem'
  subtitleEl.style.color = 'blue'

}