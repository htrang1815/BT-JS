const infixToPostfix = require("./infixtoPostfix");
function sumPostfix(str) {
  let a = infixToPostfix(str);
  console.log(a);
  let arr = [];
  let result = 0;
  for (let i = 0; i < a.length; i++) {
    let token = a[i];
    if (/[0-9]/.test(token)) {
      arr.push(token);
    } else {
      let x = arr.pop();
      let y = arr.pop();
      switch (token) {
        case "+":
          result = y + x;
          break;
        case "*":
          result = y * x;
          break;
        case "-":
          result = y - x;
          break;
        case "/":
          result = y / x;
          break;

        default:
          return 0;
          break;
      }
      arr.push(result);
    }
  }
  console.log(arr[0]);
  return arr[0];
}

// sumPostfix("8 / ( 3 - 2 * 1 )");

module.exports = sumPostfix;
