// jshint esversion:6

// Converting a normal string of words separated with spaces as the input into camelCase text.

const camelCase = function(input) {
  let output = '';
  for (let i = 0; i < input.length; i++){
    if (input[i-1] === ''){
      output+= input[i].toUpperCase();
    } else if (input[i] !== '') {
      output+= input[i];

    }
  }
  return output;
};

console.log(camelCase("this is a string"));
console.log(camelCase("loopy lighthouse"));
console.log(camelCase("supercalifragalisticexpialidocious"));