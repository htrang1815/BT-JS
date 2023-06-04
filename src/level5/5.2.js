/**
chunk: Cho một mảng đầu vào, viết một function để chia đều mảng theo số phần chỉ định. 

 * @param {array} arr
 * @returns chunk array
 */

function chunkArray(arr, a) {
  let newarr = [];
  if (a == 0) {
    return arr;
  } else {
    for (let i = 0; i < arr.length; i += a) {
      newarr.push(arr.slice(i, i + a));
    }
    return newarr;
  }
}

module.exports = chunkArray;
