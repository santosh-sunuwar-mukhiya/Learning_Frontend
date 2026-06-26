// let mark = 80;

// if (mark < 40) {
//     console.log("Fail");
// } else if (mark >= 40 && mark < 60) {
//     console.log("C");
// } else if (mark >= 60 && mark < 80) {
//     console.log("B");
// } else {
//     console.log("A");
// }


for(let num = 0; num < 21; num ++){
    if (num % 3 === 0 && num % 5 === 0) {
        console.log(num, "FizzBuzz");
    } else if (num % 3 === 0) {
        console.log(num, "Fizz");
    } else if (num % 5 === 0) {
        console.log(num, "Buzz");
    } else {
        console.log(num, "Nothing.");
    }

}