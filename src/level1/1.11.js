/**
 * Write a program that takes a list of strings as input and returns the number of strings that contain the letter 'a'
 * @param {array} arr
 * @returns the number of strings that contain the letter 'a'
 */

function theNumberStra(arr) {
  let count = 0;
  arr.forEach((x) => {
    if(x.includes('a')){
      count ++ ;
    }
  })
  return count;
}

module.exports = theNumberStra;
