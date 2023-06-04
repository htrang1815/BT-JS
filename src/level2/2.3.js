/**
 * Write a program that takes two strings as input and returns the longest common subsequence of the two strings.
 * @param {string} a
 * @param {string} b
 * @returns the longest common subsequence of the two strings
 */

function theLongestCommon(a, b) {
  let maxStr = "";
  for (let i = 0; i < a.length; i++) {
    for (let j = i + 1; j <= a.length; j++) {
      if (b.includes(a.substring(i, j))) {
        if (j - i > maxStr.length) {
          maxStr = a.substring(i, j);
        }
      }
    }
  }
  return maxStr;
}

module.exports = theLongestCommon;
