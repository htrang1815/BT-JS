/**
TrimAll: Viết function loại bỏ tất cả khoảng trắng đầu và cuối của một chuỗi bất kỳ, nếu có khoảng trắng ở giữa chuỗi đó thì chỉ giữ lại một khoảng trắng. 

 * @param {string} str
 * @returns TrimAll
 */
function trimAll(str) {
  let result = str.trim().split(" ");
  let newarr = [];
  for (let i = 0; i < result.length; i++) {
    if (result[i] != "") {
      newarr.push(result[i]);
    }
  }
  return newarr.join(" ");
}

module.exports = trimAll;
