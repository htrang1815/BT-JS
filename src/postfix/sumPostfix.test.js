const sumPostfix = require("./sumPostfix");

test("The sum postfix", () => {
  expect(sumPostfix("6 / 3 - 3 * 0")).toEqual(2);
});

test("The sum postfix", () => {
  expect(sumPostfix("8 / ( 3 - 2 * 1 )")).toEqual(8);
});

test("The sum postfix", () => {
  expect(sumPostfix("10 / ( 5 - 4 ) * 5 ")).toEqual(2);
});
