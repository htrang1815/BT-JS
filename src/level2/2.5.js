/**
 *Write a program that takes a list of integers as input and returns the maximum sum of any contiguous subarray within the list.
 * @param {array} arr
 * @returns the maximum sum of any contiguous subarray within the list.
 */

function theMaxSum(arr) {
  let max = -100000;
  for (let i = 0; i < arr.length - 1; i++) {
    for (let j = i + 1; j <= arr.length; j++) {
      let newarr = arr.slice(i, j);
      let sum = newarr.reduce(function (a, b) {
        return a + b;
      }, 0);
      if (sum > max) {
        max = sum;
      }
    }
  }
  return max;
}

module.exports = theMaxSum;
