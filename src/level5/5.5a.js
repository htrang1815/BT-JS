/**
Group by: Cho đầu vào là 1 collection ( array of object ), Viết một function để trả ra 1 OBJECT mới chứa dữ liệu được group theo trường chỉ định. 

 * @param {array} arr
 * @param {string} key
 * @returns Group by
 */

function uniqArrayObject(arr, key) {
  let result = arr.reduce((acc, currentValue) => {
    let groupKey = currentValue[key];
    if (!acc[groupKey]) {
      acc[groupKey] = [];
    }
    acc[groupKey].push(currentValue);
    return acc;
  }, {});
  return result;
}

module.exports = uniqArrayObject;
