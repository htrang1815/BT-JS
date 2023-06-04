/**
 *Write a program that takes a list of numbers as input and returns the smallest positive integer that cannot be represented as the sum of any subset of the list.
 * @param {array} arr
 * @returns the smallest positive integer that cannot be represented as the sum of any subset of the list.
 */

function theSmallestPosInt(arr) {
  arr.sort((a, b) => {
    return a - b;
  });
  let result = 1;
  for (let i = 0; i < arr.length && arr[i] <= result; i++) {
    result = result + arr[i];
  }

  return result;
}

module.exports = theSmallestPosInt;
