const squareNumber = require("./1.3");

test("Square Number", () => {
  expect(squareNumber(1)).toBe(1);
});
test("Square Number", () => {
  expect(squareNumber(2)).toBe(4);
});
test("Square Number", () => {
  expect(squareNumber(3)).toBe(9);
});
test("Square Number", () => {
  expect(squareNumber(4)).toBe(16);
});
test("Square Number", () => {
  expect(squareNumber(5)).toBe(25);
});
