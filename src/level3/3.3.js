/**
 *Write a program that takes a list of integers as input and returns the longest increasing subsequence of the numbers.
 * @param {array} arr
 * @returns the longest increasing subsequence of the numbers
 */

function theLongestIncre(arr) {
  let maxarr = [];
  for (let i = 0; i < arr.length - 1; i++) {
    let newarr = [];
    newarr.push(arr[i]);
    for (let j = i + 1; j < arr.length; j++) {
      if (newarr.at(-1) < arr[j]) {
        newarr.push(arr[j]);
        if (newarr.length > maxarr.length) {
          maxarr = newarr;
        }
      }
    }
  }

  return maxarr;
}

module.exports = theLongestIncre;
