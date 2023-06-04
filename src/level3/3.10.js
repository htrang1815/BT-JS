/**
 *Write a program that takes a list of strings as input and returns the list sorted by the number of distinct characters in each string, with the shortest strings appearing first
 * @param {array} arr
 * @returns the list sorted by the number of distinct characters in each string, with the shortest strings appearing first
 */

function theSortedList(arr) {
  arr.sort((a, b) => {
    return a.length - b.length;
  });
  return arr;
}

module.exports = theSortedList;
