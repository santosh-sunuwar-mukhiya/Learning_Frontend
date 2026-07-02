// 1. Check Whether a Number is Positive, Negative, or Zero
function checkNumber(num) {
    if (num > 0) {
        return "Positive";
    } else if (num < 0) {
        return "Negative";
    } else {
        return "Zero";
    }
}

// 2. Print Numbers Using a Loop
function printNumbers(n) {
    for (let i = 1; i <= n; i++) {
        console.log(i);
    }
}

// 3. Square and Add
function calculate(num) {
    function square(x) {
        return x * x;
    }
    return square(num) + 10;
}

// Render function — calls all three with the same num
function render(num) {
    console.log("checkNumber result:", checkNumber(num));

    console.log("printNumbers output:");
    printNumbers(num);

    console.log("calculate result:", calculate(num));
}

render(5);