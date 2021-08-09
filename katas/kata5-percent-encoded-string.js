// jshint esversion:6

// Replace all whitespace with %20 of the normal string of words  
const urlEncode = function(text) {
  let trimmedText = text.trim();
  let encoded = '';

  for (let i = 0; i < trimmedText.length; i++) {
    if (trimmedText[i] === '') {
      encoded += '%20';
    } else {
      encoded += trimmedText[i];
    }
  }

  return encoded;
};

console.log(urlEncode("Lighthouse Labs"));
console.log(urlEncode(" Lighthouse Labs "));
console.log(urlEncode("blue is greener than purple for sure"));