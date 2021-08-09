// jshint esversion:6

// Function that determines how many hundreds can be made from a number to send to Mars.

function howManyHundreds(n) {
  return Math.trunc(n / 100);   // Math.trunc() removes any fraction digits
}
console.log(howManyHundreds(1000), "=?", 10);
console.log(howManyHundreds(894), "=?", 8);
console.log(howManyHundreds(520), "=?", 5);
console.log(howManyHundreds(99), "=?", 0);
console.log(howManyHundreds(0), "=?", 0);