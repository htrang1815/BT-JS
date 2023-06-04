/**
 *Write a program that takes a list of numbers as input and returns the second smallest number in the list.
 * @param {array} arr
 * @returns the second smallest number in the list.
 */

 function theSecondSmallest(arr) {
    arr.sort((a, b) => {
      return a-b;
    });
    let i =0;
    while (i <= arr.length){
        if(arr[i] != arr[0]){
            return arr[i]
        }else{
            i ++;
        }
    }
  }

  module.exports = theSecondSmallest;
