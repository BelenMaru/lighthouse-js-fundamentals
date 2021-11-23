// jshint esversion:6

// The function will receive an input string and one or more casing options.
// Return a new string that is formatted based on casing options.
// Values higher in the list should be processed first, camel, pascal, snake, kebab, title,camel, pascal, snake, kebab, title, camel, pascal, snake, kebab, title.

const makeCase = function(input, case) {
  
}

console.log(makeCase("this is a string", "camel"));
console.log(makeCase("this is a string", "pascal"));
console.log(makeCase("this is a string", "snake"));
console.log(makeCase("this is a string", "kebab"));
console.log(makeCase("this is a string", "title"));
console.log(makeCase("this is a string", "vowel"));
console.log(makeCase("this is a string", "consonant"));
console.log(makeCase("this is a string", ["upper", "snake"]));