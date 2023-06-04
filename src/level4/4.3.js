/**
 *Write a program that takes a list of strings as input and returns the length of the longest substring that appears in every string in the list.

 * @param {array} arr
 * @returns the longest substring that appears in every string in the list.
 */
const theLongestCommon = require("../level2/2.3");

function theLongestSub(arr) {
  let maxStr = "";
  maxStr = theLongestCommon(arr[0], arr[1]);
  for (let i = 2; i < arr.length; i++) {
    let result = "";
    result = theLongestCommon(maxStr, arr[i]);
    if (result.length < maxStr.length) {
      maxStr = result;
    }
  }
  return maxStr.length;
}

module.exports = theLongestSub;
