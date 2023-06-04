/**
Write a program that takes a list of strings as input and returns the list sorted by the number of distinct words in each string, with the longest strings appearing first.

 * @param {array} arr
 * @returns the list sorted by the number of distinct words in each string, with the longest strings appearing first.
 */

function theListSorted(arr) {
  arr.sort((a, b) => {
    return b.length - a.length;
  });
  arr.sort((a, b) => {
    return b - a;
  });
  return arr;
}

module.exports = theListSorted;
