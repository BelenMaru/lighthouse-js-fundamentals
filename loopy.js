// jshint esversion:6
for (var i = 100; i <= 200; i++) {
  var lo = i % 3 === 0;
  var li = i % 4 === 0;
  console.log(lo ? li ? "LoopyLighthouse" : "Loopy" : li ? "Lighthouse" : i);
}

// Option 2

for ( var num = 100; num <= 200; num++) {
  if (num % 3 === 0){
    console.log("Loopy");
  } else if (num % 4 === 0){
    console.log("Lighthouse");
  } else if (num % 3 === 0 && num % 4 === 0) {
      console.log("LoopyLighthouse");
    } else {
      console.log(num);
    }
  }
