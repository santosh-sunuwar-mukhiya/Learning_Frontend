// alert("counter")

const dataEl = document.getElementById('data')
const plusBtn = document.getElementById('plus')
const minusBtn = document.getElementById('minus')
const resetBtn = document.getElementById('reset')

let count = 0

function increase () {
    count++
   data.innerText = count
}

function decrease() {
    count--
    data.innerText = count
}

function reset(){
    count = 0
    data.innerText = 0
}