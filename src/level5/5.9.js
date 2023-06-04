/**
SumAll: Viết function để tính tổng giá trị của các key của các phần tử con trong mảng bất kỳ:
 * @param {array} arr
 * @returns sum all
 */

function sumAll(arr) {
  let result = arr.reduce((newarr, cur) => {
    for (let key in cur) {
      if (!newarr[key]) {
        newarr[key] = 0;
      }
      newarr[key] += cur[key];
    }
    return newarr;
  }, {});
  return result;
}

module.exports = sumAll;
