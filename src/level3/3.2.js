/**
 *Write a program that takes a list of integers as input and returns the maximum difference between any two elements in the list.
 * @param {array} arr
 * @returns the maximum difference between any two elements in the list.
 */

function theMaxBetween(arr) {
  let newarr = [];
  for (let i = 0; i < arr.length - 1; i++) {
    for (let j = i + 1; j < arr.length; j++) {
      newarr.push(Math.abs(arr[i] - arr[j]));
    }
  }

  newarr.sort((a, b) => {
    return b - a;
  });
  return newarr[0];
}

module.exports = theMaxBetween;
