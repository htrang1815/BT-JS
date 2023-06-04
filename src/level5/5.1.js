/**
reverses: Cho đầu vào là 1 mảng, Viết một function để đảo ngược thứ tự phần tử trong mảng , yêu cầu không dùng hàm Reverses có sẵn của javascript
 * @param {array} arr
 * @returns reverses array
 */

function reversesArray(arr) {
  const reverses = arr.reduce((newarr, a) => {
    return [a, ...newarr];
  }, []);

  return reverses;
}

module.exports = reversesArray;
