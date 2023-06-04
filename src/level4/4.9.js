/**
Write a program that takes a list of integers as input and returns the length of the longest increasing subsequence of the numbers, with the additional constraint that no two adjacent elements in the subsequence can differ by more than 1.

 * @param {array} arr
 * @returns the length of the longest increasing subsequence of the numbers
 */

function theLengthLongest(arr) {
  let cur = 1;
  let max = 0;
  arr.reduce((a, b) => {
    if (b == a + 1) {
      cur++;
      max = Math.max(max, cur);
    } else {
      cur = 1;
    }
    return b;
  });
//   max = Math.max(max, cur);
  return max;
}


module.exports = theLengthLongest;
