// jshint esversion:6

// Given a number as our input data, this number is the highest value of our multiplication table
// Generate a multiplication table for the values from 1 to the provided number.

const multiplicationTable = function(maxValue) {
  let output = '';
  for (let i = 1; i <= maxValue; i++ ) {
    for (let j = 1; j <= maxValue; j++) {
      output += i*j;
      if( j < maxValue) {
        output += '';      // add space after number except final number
      }
    }
    output += '\n';       // add newline character
  }
  return output;
};

console.log(multiplicationTable(1));
console.log(multiplicationTable(5));
console.log(multiplicationTable(10));