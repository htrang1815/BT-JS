/**
MapKey: Cho 1 mảng các key, vào 1 mảng các object , Viết một function để trả ra một mảng các object theo thứ tự mảng các key. ( Yêu cầu dùng hàm map )

 * @param {array} arr
 * @param {array} key
 * @returns MapKey
 */
function mapKey(arr, key) {
  let result = [];
  arr.map((x) => {
    let cur = {};
    for (let i = 0; i < arr.length; i++) {
      cur[key[i]] = x[key[i]];
    }
    result.push(cur);
  });
  return result;
}

module.exports = mapKey;
