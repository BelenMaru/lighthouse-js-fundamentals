// jshint esversion:6

// Function takes in an array of car objects, and the speed of a car as it passes the sensor.
// Function create a new object with a property called speed and another property called time
// and add it to the cars array.  
// Retrieve current time for setting the time property

const carsInput = [
  {
    time: 1568329654807,
    speed: 40
  },
  {
    time: 1568329821632,
    speed: 42
  },
  {
    time: 1568331115463,
    speed: 35
  }
];
 

const speedInput = 38;
  
const output = [
  {
    time: 1568329654807,
    speed: 40
  },
  {
    time: 1568329821632,
    speed: 42
  },
  {
    time: 1568331115463,
    speed: 35
  },
  {
    time: 1568431216417,
    speed: 38
  }
];

const carPassing = (cars, speed) => {
  // for every valid input of speed, create a new object containing time = Date.now() and the speed argument

  let newCarList = [...cars];
  if(cars && cars.length && speed){
    newCarList.push({
      time: Date.now(),
      speed
    });
  }
  return newCarList;
};

console.log(carPassing(carsInput, speedInput));