/**
uniq: Cho một mảng đầu vào, viết một function để loại bỏ các phần tử bị lặp trong mảng. 

 * @param {array} arr
 * @returns uniq array
 */

function uniqArray(arr) {
  let newarr = arr.reduce((unique, item) =>
  unique.includes(item) ? unique : [...unique, item], []);
  return newarr;
}

module.exports = uniqArray;
