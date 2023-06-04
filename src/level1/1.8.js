/**
 * Write a program that takes a list of numbers as input and returns the median of the numbers.
 * @param {array} arr
 * @returns returns the median of the numbers
 */

function theMedianNumbers(arr) {
    arr.sort((a,b)=>{
        return a-b;
    });
    if(arr.length%2 == 1){
        let i = (arr.length - 1)/2;
        return arr[i];
    }else{
        let j = arr.length/2;
        return (arr[j] +arr[j-1])/2
    }
}

module.exports = theMedianNumbers;