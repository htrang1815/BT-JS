/**
 *Write a program that takes a list of strings as input and returns the two strings with the largest overlap of characters.
 * @param {array} arr
 * @returns the two strings with the largest overlap of characters
 */

function theOverlap(a, b) {
  let count = 0;
  for (let i = 0; i < a.length; i++) {
    if (b.includes(a.charAt(i))) {
      count++;
    }
  }
  return count;
}

function theStringOverlap(arr) {
  let max = 0;
  let a = 0;
  let b = 0;
  for (let i = 0; i < arr.length - 1; i++) {
    for (j = i + 1; j < arr.length; j++) {
      let count = theOverlap(arr[i], arr[j]);
      if (count > max) {
        max = count;
        a = i;
        b = j;
      }
    }
  }

  let result = [];
  result.push(arr[a], arr[b]);
  return result;
}

module.exports = theStringOverlap;
