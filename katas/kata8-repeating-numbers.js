// jshint esversion:6

// Two dimensional array (an array of arrays), where each sub-array will have two numeric values.
// The first will be the value to repeat, the second will be the amount of times to repeat that value.
// Function will return a string with each of the given values repeated the appropriate number of times.
// If there are multiple sets of values each set should be separated by a comma.
// If there is only one set of values then you should omit the comma.


const repeatNumbers = function (data) {
  var repeatString = '';
  var numSubArrays = data.length;
  for (var i = 0; i < numSubArrays; i++) {
    var firstVal = data[i][0];   // value to repeat
    var secondVal = data[i][1];  // amount of times to repeat the value
  for  ( var j = 0; j < secondVal; j++) {
    repeatString+= firstVal; // repeat 'i' 'j' times
  }
    if (numSubArrays > 1 && numSubArrays -1) {
      repeatString+= ' ,';  // add comma for sub-arrays excluding last one
    }
  }
  return repeatString;
};

console.log(repeatNumbers([[1, 10]])); // 1111111111
console.log(repeatNumbers([[1, 2], [2, 3]])); // 11, 222
console.log(repeatNumbers([[10, 4], [34, 6], [92, 2]])); // 10101010, 343434343434, 9292