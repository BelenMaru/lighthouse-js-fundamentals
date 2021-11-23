// jshint esversion:6

// The function will receive a URL encoded string, and
//  return the a JavaScript object that represents that data.
//  The data first has to be encoded to convert any special characters to URL safe characters.
// %20 represents a space character.
// Key-value pairs are represented using an = character: key=value.
// Multiple key-value pairs are separated using a & character: key1=value1&key2=value2.

const urlDecode = function(text) {
  let length = text.length;
  let encoded = '';
  if (text[0] === '') {
    encoded += '';
  } else {
    encoded += text[0];
  }
  for (i= 1; i < length-1; i++) {
    if (text[i] === '') {
      encoded += '%20';
    } else {
      encoded += text[i];
    }
  }
  if(text[length -1] === '') {
    encoded += '';
  } else {
    encoded += text[length -1];
  }
  return encoded;
};

console.log(urlDecode("duck=rubber"));
console.log(urlDecode("bootcamp=Lighthouse%20Labs"));
console.log(urlDecode("city=Vancouver&weather=lots%20of%20rain"));
console.log(urlDecode("city=Vancouver&weather=lots%20of%20rain").weather);


// Output
// {duck: "rubber"}
// {bootcamp: "Lighthouse Labs"}
// {city: "Vancouver", weather: "lots of rain"}
// "lots of rain"