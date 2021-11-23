// jshint esversion:6

// The spaces are removed from the english text and the characters are written into a square (or rectangle)
// Function receive a message, and return the secret square code version of the message.


const squareCode = function(message) {
  message = message.split(' ').join('');
  let squareSize = Math.ceil(Math.sqrt(message.length));
  let newArr = [];
  let goRound = 0;

  while (newArr.length < squareSize) {
    let newLine = [];
  for (let i = goRound; i < message.length; i += squareSize) {
    newLine.push(message[i]);
  }
  newArr.push(newLine.join(''));
  goRound++;
  }
return newArr.join(' ');
};

console.log(squareCode("chill out"));
console.log(squareCode("feed the dog"));
console.log(squareCode("have a nice day"));
console.log(squareCode("if man was meant to stay on the ground god would have given us roots"));

// Output:
// clu hlt io  
// fto ehg ee dd
// hae and via ecy
// imtgdvs fearwer mayoogo anouuio ntnnlvt wttddes aohghn sseoau