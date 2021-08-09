// jshint esversion:6

// Creates an array for a given start,end and step parameter
function range(start, end, step){
  var result = [];
  if(start > end || Math.sign(step) === -1){
    return [];
  }
  for (var i = start; i <= end; i += step){
    result.push(i);
  }
  return result;
}
console.log(range(0, 10, 2));
console.log(range(10, 30, 5));
console.log(range(-5, 2, 3));