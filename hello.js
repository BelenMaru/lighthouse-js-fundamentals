// jshint esversion:6
// Declaring Functions
const sayHello = function(){
  console.log("Hello, world");
};
sayHello();

// Function Examples
const saySalut = function(name){
  console.log("Hello," + name);
};
saySalut("Caliban");
saySalut("Miranda");
saySalut("Ferdinand");

// Function with console.log
const sayHelloToConsole = function(name){
  console.log("Hello" + name);
};
sayHelloToConsole("John");

// Function with retun
const returnSayHello = function (name){
  return "Hello," + name;

};
const greeting =returnSayHello("Peter");
console.log(greeting);

