// jshint esversion:6

//  Calculate which coins we should use when we need to give change.
//  Total of a transaction, and the amount of cash given to the cashier will be represented as whole numbers in cents.
//  Therefore $10 will be represented as 1000.
//  Function should return object which describes the total amount of change for the cashier to give back.
//  Valid denominations are Twenty dollars,Ten dollars,Five dollars,Two dollars,One dollar
//  Quarter (25¢),Dime (10¢),Nickel (5¢),Penny (1¢)


const calculateChange = function(total, cash) {
  const money = {twenty: 2000, ten: 1000, five: 500, twoDollar: 200, dollar: 100, quarter: 25, dime: 10, nickel: 5, penny: 1};

  let change = {};
  let remainder = (cash -total);

  for ( let key in money) {
    if (Math.floor(remainder / money[key]) > 0) {
      change[key] = Math.floor(remainder / money[key]);
      remainder = remainder - (money[key] * Math.floor(remainder / money[key]));
    }
  }

  return change;

};

console.log(calculateChange(1787, 2000));
console.log(calculateChange(2623, 4000));
console.log(calculateChange(501, 1000));