// jshint esversion:6

// Determines the last index of an item in an array.
// value never occurs, the function should return -1
function lastIndexOf(item,output){
  var num = -1;
  for (var i = 0; i < item.length; i++){
    if(item[i] === output){
      num = i;
    }
  }
  return num;
}
console.log(lastIndexOf([ 0, 1, 4, 1, 2 ], 1), "=?", 3);
console.log(lastIndexOf([ 0, 1, 4, 1, 2 ], 2), "=?", 4);
console.log(lastIndexOf([ 0, 1, 4, 1, 2 ], 3), "=?", -1);
console.log(lastIndexOf([ 5, 5, 5 ], 5), "=?", 2);
console.log(lastIndexOf([], 3), "=?", -1);