/**
 * Write a program that takes a list of numbers as input and sorts the list in ascending order.
 * @param {array} arr
 * @returns sorts the list in ascending order
 */

function listAscendingOrder(arr) {
    arr.sort((a, b) => {
      return a - b;
    });
    return arr; 
}

module.exports = listAscendingOrder;