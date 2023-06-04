/**
 * Write a program that takes a list of numbers as input and returns the sum of the numbers that are divisible by both 3 and 5.
 * @param {array} a
 * @returns the sum of the numbers that are divisible by both 3 and 5.
 */

function theSumNumber(arr) {
  let sum = 0;
  arr.forEach((x) => {
    if (x % 3 == 0 && x % 5 == 0) {
      sum += x;
    }
  });
  return sum;
}

module.exports = theSumNumber;
