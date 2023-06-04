/**
 * Write a program that takes a list of strings as input and displays the shortest string in the list.
 * @param {array} arr
 * @returns the shortest string in the list
 */

function shortestString(arr) {
  arr.sort((a, b) => {
    return a.length - b.length;
  });
  let rel = [];
  rel.push(arr[0]);
  for (let i = 1; i < arr.length; i++) {
    if (arr[i].length == arr[0].length) {
      rel.push(arr[i]);
    }
  }
  return rel;
}
module.exports = shortestString;

