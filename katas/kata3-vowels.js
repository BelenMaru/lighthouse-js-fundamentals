// Count the number of vowels that appear in a given string
const numberOfVowels = function (data) {
  const vowels = "aeiou";
  let count = 0;
  for (let i = 0; i < data.length; i++) {
    if (vowels.includes(data[i])) {
      count += 1;
    }
  }
  return count;
};

console.log(numberOfVowels("orange"));
console.log(numberOfVowels("lighthouse labs"));
console.log(numberOfVowels("aeiou"));
