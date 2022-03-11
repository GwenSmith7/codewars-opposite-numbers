'use strict';

function opposite(number) {
  // find a method that returns the opposite (either negative or positive of a number)

  // math.sign returns -1 if the argument is negative and 1 if the argument is positive

  // check if number is negative or positive then use math.abs to return the positive or negative version of that number
  return Math.sign(number) === 1 ? -Math.abs(number) : Math.abs(number);
}
