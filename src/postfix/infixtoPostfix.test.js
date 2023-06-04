const infixtoPostfix = require("./infixtoPostfix");

test("The infix to postfix", () => {
  expect(infixtoPostfix('A/B-C*D')).toEqual("AB/CD*-");
});

test("The infix to postfix", () => {
  expect(infixtoPostfix('A/(B-C*D)')).toEqual("ABCD*-/");
});

test("The infix to postfix", () => {
  expect(infixtoPostfix('A/(B-C)*D')).toEqual("ABC-/D*");
});
