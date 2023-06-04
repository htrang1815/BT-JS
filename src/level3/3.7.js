/**
 *Write a program that takes a string as input and returns the length of the longest palindrome that can be formed by rearranging the characters in the string.
 * @param {string} arr
 * @returns the smallest positive integer that cannot be represented as the sum of any subset of the list.
 */

function theLongestPalindrome(str) {
  let newstr = str
    .trim()
    .toLowerCase()
    .split("")
    .reverse()
    .join("")
    .replace(/\s/g, "");
  let str1 = str.trim().toLowerCase().split(" ").join("");
  let max = 0;
  let count = 0;

  for (let i = 0; i < str1.length; i++) {
    let count = 0;
    for (let j = i + 1; j <= str1.length; j++) {
      if (str1.includes(newstr.slice(i, j))) {
        count = j - i;
        if (count > max) {
          max = count;
        }
      }
    }
  }
  return max;
}

module.exports = theLongestPalindrome;
