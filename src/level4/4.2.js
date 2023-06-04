/**
 *Write a program that takes a list of integers as input and returns the number of distinct subsequences of the list that sum up to a target value.
 * @param {array} arr
 * @param {number} a
 * @returns the number of distinct subsequences of the list that sum up to a target value.
 */

function distSumRec(arr, n, sum, currindex, s) {
  if (currindex > n) return;

  if (currindex == n) {
    s.push(sum);
    return;
  }

  distSumRec(arr, n, sum + arr[currindex], currindex + 1, s);
  distSumRec(arr, n, sum, currindex + 1, s);
}

function theNumberDistSub(arr, target) {
  let n = arr.length;
  let s = [];
  distSumRec(arr, n, 0, 0, s);
  let s1 = [...s];
  let count = 0;
  for (a of s1) {
    if (a == target) {
      count++;
    }
  }
  return count;
}
// console.log(distSumRec([1, 1, 2, 3, 4], 5));

module.exports = theNumberDistSub;
