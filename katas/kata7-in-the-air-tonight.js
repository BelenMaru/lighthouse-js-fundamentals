// jshint esversion:6

// Check a collection of air samples, first argument is an array of strings, where each string represents a small air sample that is either clean or dirty
// Second argument is a number representing the highest acceptable amount of dirty samples
// For example, a threshold of 0.4 means that there must be less than 40% of total samples classified as dirty for our air to be considered clean
// Function must return Polluted if there are too many dirty air samples, or Clean if the proportion of dirty samples is below the threshold.

const checkAir = function(samples,treshold){
  let dirty = 0;
  let clean = 0;
  for (let sample = 0; sample < samples.length; sample++){
    if (samples(sample) === "dirty") {
      dirty++;
    }
    if (samples(sample) === "clean") {
      clean++;
    }
  }
  if ( treshold > dirty / (dirty + clean)){
    return "clean";
  } else {
    return polluted;
  }

};

console.log(checkAir(
  ['clean', 'clean', 'dirty', 'clean', 'dirty', 'clean', 'clean', 'dirty', 'clean', 'dirty'],
  0.3
));

console.log(checkAir(
  ['dirty', 'dirty', 'dirty', 'dirty', 'clean'],
  0.25
));

console.log(checkAir(
  ['clean', 'dirty', 'clean', 'dirty', 'clean', 'dirty', 'clean'],
  0.9
));