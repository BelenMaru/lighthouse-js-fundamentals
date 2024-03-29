// jshint esversion:6
const raining = true;
const cold = false;

if (raining) {
    console.log("Don't forget your umbrella!");
}

if (cold) {
    console.log("Make sure you pick out a scarf!");
}

console.log("Now you're ready to go outside!");

// More example with If Statements
const temperature = -1;

if (temperature < 0) {
  console.log("Make sure you pick out a scarf!");
} else if (temperature < 15) {
  console.log("Short sleeves won't cut it!");
} else {
  console.log("Short sleeves are fine.");
}

console.log("Now you're ready to go outside!");

// If Statement with Logical Operators
const isCitizen = true;
const age = 26;

if (isCitizen && age > 18) {
  console.log("You are eligible to vote.");
}