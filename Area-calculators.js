// jshint esversion:6

// Calculate the areas of Rectangle,Triangle and Circle
// Calculate are of Rectangle
function calculateRectangleArea(length, width){
  if (width > 0){
    return length * width;
  }else {
    return undefined;
  }
}
console.log(calculateRectangleArea(10, 5));     // should print 50
console.log(calculateRectangleArea(1.5, 2.5));  // should print 3.75
console.log(calculateRectangleArea(10, -5));    // should print undefined

// Calculate area of Triangle
function calculateTriangleArea(base, height) {
  if (height > 0) {
    return base * height / 2;
  } else {
    return undefined;
  }
}

console.log(calculateTriangleArea(10, 5)); // should print 25
console.log(calculateTriangleArea(3, 2.5)); // should print 3.75
console.log(calculateTriangleArea(10, -5)); // should print undefined

// Calculate area of Circle
function calculateCircleArea(radius) {
  if (radius > 0) {
    return Math.PI * (radius * radius);
  } else {
    return undefined;
  }
}
console.log(calculateCircleArea(10)); // should print 314.159...
console.log(calculateCircleArea(3.5)); // should print 38.484...
console.log(calculateCircleArea(-1)); // should print undefined