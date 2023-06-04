/**
 *Write a program that takes a list of integers as input and returns the maximum product of any three distinct elements in the list

 * @param {array} arr
 * @returns the maximum product of any three distinct elements in the list
 */

function theMaxProduct(arr) {
  arr.sort((a, b) => {
    return a - b;
  });
  let n = arr.length;

  let pro1 = arr[n - 1] * arr[n - 2] * arr[n - 3];
  let pro2 = arr[0] * arr[1] * arr[n - 1];
  if (pro1 > pro2) {
    return pro1;
  } else {
    return pro2;
  }
}

module.exports = theMaxProduct;
