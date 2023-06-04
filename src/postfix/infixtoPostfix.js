// function precendence(x) {
//   if (x == "(") return 0;
//   if (x == "+" || x == "-") return 1;
//   if (x == "*" || x == "/" || x == "%") return 2;
//   if (x == ")") return 3;

//   return 4;
// }

// function infixtoPostfix(arr) {
//   let stack = [];
//   let postfix = [];
//   let j = 0;
//   for (let i = 0; i < arr.length; i++) {
//     let x = arr[i];
//     let p = precendence(x);
//     if (p == 4) {
//       postfix.push(p);
//     } else if (p == 0) {
//       stack.push(x);
//     } else if (p == 3) {
//       while (stack.length > 0 && stack[stack.length - 1] !== "(") {
//         postfix.push(stack.pop());
//       }
//       stack.pop();
//     } else {
//       while (stack.length > 0 && precendence(stack[stack.length - 1]) >= p) {
//         postfix.push(stack.pop());
//       }
//       stack.push(x);
//     }
//   }
//   while (stack.length > 0) {
//     postfix.push(stack.pop);
//   }
//   return postfix.join("");
// }

function infixToPostfix(arr) {
  let stack = [];
  let postfix = [];
  let operators = {
    "+": 1,
    "-": 1,
    "*": 2,
    "/": 2,
    "%": 2,
    "^": 3,
  };

  for (let i = 0; i < arr.length; i++) {
    let token = arr.charAt(i);

    if (/[a-zA-Z0-9]/.test(token)) {
      postfix.push(token);
    } else if (token === "(") {
      stack.push("(");
    } else if (token === ")") {
      while (stack.length > 0 && stack[stack.length - 1] !== "(") {
        postfix.push(stack.pop());
      }
      stack.pop();
    } else {
      while (
        stack.length > 0 &&
        operators[token] <= operators[stack[stack.length - 1]]
      ) {
        postfix.push(stack.pop());
      }
      stack.push(token);
    }
  }

  while (stack.length > 0) {
    postfix.push(stack.pop());
  }

  return postfix.join("");
}

module.exports = infixToPostfix;
