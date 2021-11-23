//a function called titleCase that takes a sentence string and gives it title casing.

const titleCase  = function(text) {
  let str = 0;
  text.toLowerCase();
  let strAr = text.split(" ");
  for (var i = 0; i < strAr.length; i++) {
    strAr[i] = strAr[i].charAt(0).toUpperCase() + strAr[i].substring(1).toLowerCase();   

  }
  str = strAr.join(" ");
  return str;
};

console.log(titleCase("this is an example"));
console.log(titleCase("test"));
console.log(titleCase("i r cool"));
console.log(titleCase("WHAT HAPPENS HERE"));

  

