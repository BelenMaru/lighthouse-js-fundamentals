// jshint esversion:6

//  Function that helps determine which recipes match the ingredients that both bakeries have in stock.
//  Function will receive three parameters: - An array of ingredients in stock at Bakery A - 
//  An array of ingredients in stock at Bakery B - An array of recipe objects. 
//  Each recipe has a name property(string) and an ingredient property(array).
//  Find a recipe that utilizes one ingredient from Bakery A and one from Bakery B.
//  Function should return the name of the correct recipe.

const chooseRecipe = function(bakeryA, bakeryB, recipes) {
  for (const recipe of recipes) {
  if (bakeryA.indexOf(recipe.ingredients[0]) >=0 && (bakeryB.indexOf(recipe.ingredients[1]) >=0)) {
    return recipe.name;
  } else if(bakeryB.indexOf(recipe.ingredients[0]) >=0 && (bakeryA.indexOf(recipe.ingredients[1]) >=0)) {
    return recipe.name;
  }
}
};

let bakeryA = ['saffron', 'eggs', 'tomato paste', 'coconut', 'custard'];
let bakeryB = ['milk', 'butter', 'cream cheese'];
let recipes = [
    {
        name: 'Coconut Sponge Cake',
        ingredients: ['coconut', 'cake base']
    },
    {
        name: 'Persian Cheesecake',
        ingredients: ['saffron', 'cream cheese']
    },
    {
        name: 'Custard Surprise',
        ingredients: ['custard', 'ground beef']
    }
];

console.log(chooseRecipe(bakeryA, bakeryB, recipes));

bakeryA = ['potatoes', 'bay leaf', 'raisins'];
bakeryB = ['red bean', 'dijon mustard', 'apples'];
recipes = [
    {
        name: 'Potato Ganache',
        ingredients: ['potatoes', 'chocolate']
    },
    {
        name: 'Sweet Fish',
        ingredients: ['anchovies', 'honey']
    },
    {
        name: "Nima's Famous Dijon Raisins",
        ingredients: ['dijon mustard', 'raisins']
    }
];

console.log(chooseRecipe(bakeryA, bakeryB, recipes));
