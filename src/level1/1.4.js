/**
 * Write a program that takes a list of numbers as input and displays the largest number in the list.
 * @param {array} arr
 * @returns the largest number in the list
 */

function largestNum(arr) {
  return Math.max(...arr);
}
module.exports = largestNum;
