/**
Write a program that takes a list of integers as input and returns the length of the longest increasing subsequence of the numbers, with the additional constraint that no two adjacent elements in the subsequence can differ by more than 1.
 * @param {array} arr
 * @returns the length of the longest increasing subsequence of the numbers
 */
const theLongestCommon = require("../level2/2.3");

function theLengthLongest(arr, k) {
  let max = 0;
  let a = [];
  for (let i = 0; i < arr.length - 1; i++) {
    let cur = 0;
    for (let j = i + 1; j < arr.length; j++) {
      cur = theLongestCommon(arr[i], arr[j]).length;
      if (cur > max) {
        max = cur;
        a = [];
        a.push(arr[i], arr[j]);
      }
    }
  }
  if (max > k) {
    return a;
  } else {
    return 0;
  }
}

module.exports = theLengthLongest;
