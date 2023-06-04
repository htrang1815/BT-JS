/**
 *Write a program that takes a list of integers as input and returns the minimum number of moves required to sort the list in ascending order using bubble sort.
 * @param {array} arr
 * @returns the minimum number of moves required to sort the list in ascending order using bubble sort.
 */

function BubbleSort(arr) {
  let temp = 0;
  n = arr.length;
  let count = 0;
  for (i = 0; i < n - 1; i++) {
    for (j = 0; j < n - i - 1; j++) {
      if (arr[j] > arr[j + 1]) {
        temp = arr[j];
        arr[j] = arr[j + 1];
        arr[j + 1] = temp;
        count++;
      }
    }
  }
  return count;
}

module.exports = BubbleSort;

