// alert("hello world")

const numbers = [1, 2, 3, 4, 5, 6];

// Square every number
numbers.forEach(function(num) {
  console.log(num * num);
});

// Print only even numbers
numbers.forEach(function(num) {
  if (num % 2 === 0) {
    console.log(num);
  }
});
