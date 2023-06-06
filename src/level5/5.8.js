/**
Switch Order: Viết function để thay đổi thứ tự order của các object. 

 * @param {number} a
 * @param {number} b
 * @returns switchOrder
 */

function switchOrder(a, b) {
  let i = 0;
  let j = 0;
  let arr = [
    { id: 10, order: 0 },
    { id: 12, order: 1 },
    { id: 9, order: 2 },
    { id: 11, order: 3 },
  ];

  arr.map((x, index) => {
    if (x["id"] == a) {
      i = index;
    }
    if (x["order"] == b) {
      j = index;
    }
  });

  let temp = arr[i];
  arr[i] = arr[j];
  arr[j] = temp;

  arr.map((x, index) => {
    x["order"] = index;
  });

  return arr;
}

module.exports = switchOrder;
