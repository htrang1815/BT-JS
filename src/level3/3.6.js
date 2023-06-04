/**
 *Write a program that takes two lists of integers as input and returns the median of the combined list.
 * @param {array} a
 * @param {array} b
 * @returns  the median of the combined list. 
 */

 function theMedianCombined(a,b){
    let c = a.concat(b);
    let n = c.length;
    c.sort((x,y) => {return x - y});
    let result = 0;
    if(n%2 !=0){
        result = c[(n-1)/2];
    }else{
        result = (c[n/2] + c[n/2 -1])/2
    }
    return result;
 }

 module.exports = theMedianCombined; 