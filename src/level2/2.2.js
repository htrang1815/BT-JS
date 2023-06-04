/**
 * Write a program that takes a list of strings as input and returns the longest word in the list.
 * @param {array} arr
 * @returns the longest word in the list.
 */
function theLongestWord(arr) {
  arr.sort((a, b) => {
    return b.length - a.length;
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
module.exports = theLongestWord;
