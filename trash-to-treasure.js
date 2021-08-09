// jshint esversion:6

//  First argument, trash is a string that tell what type of item is being submitted.
//  Second argument, bins is an object containing three properties holds some numerical value.
//  Function increase the correct value in the bins object then return the newly updated object.

const _bins = {
  waste: 4,
  recycling: 2,
  compost: 5
};

const _trash = 'recycling';
 
const smartGarbage = function(trash, bins){
  let normalizeTrashString = '';
  if (trash  && trash.length){
    normalizeTrashString = trash.toString().toLowerCase().trim();
  }
  let newBins = {};
  if (bins && typeof bins === 'object') {
    Object.assign(newBins, bins);
  }
  if (normalizeTrashString in bins) {
    newBins[normalizeTrashString] ++;
  }
  return newBins;
};
console.log(smartGarbage(_trash, _bins));