const myTextEl = document.getElementById("myText");
const myHeadingEl = document.getElementById("myHeading");
const nameEl = document.getElementById('name')
// problem 1
// Change the paragraph text when the button is clicked
function changeText() {
  myTextEl.innerHTML = "Hello JavaScript!";
}

// problem 2
// Change heading color to blue on hover, back to black when mouse leaves
function changeColor() {
  myHeadingEl.style.color = "blue";
}

function resetColor() {
  myHeadingEl.style.color = "black";
}

myHeadingEl.addEventListener("mouseover", changeColor);
myHeadingEl.addEventListener("mouseout", resetColor);