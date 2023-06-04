/**
 * Write a program that takes a list of numbers as input and returns the second largest number in the list.
 * @param {array} arr
 * @returns the second largest number in the list
 */
function theSecondLargest(arr) {
  arr.sort((a, b) => {
    return b - a;
  });
  return arr[1];
}

module.exports = theSecondLargest;
