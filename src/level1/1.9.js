/**
 * Write a program that takes a string as input and returns the number of words in the string.
 * @param {string} str
 * @returns the number of words in the string
 */

function theNumberWords(str) {
  return str.trim().split(" ").length;
}

module.exports = theNumberWords;
