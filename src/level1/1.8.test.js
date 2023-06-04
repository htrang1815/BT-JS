const theMedianNumbers = require("./1.8");

test("The median of the numbers", () => {
  expect(theMedianNumbers([3, 13, 2, 34, 11, 26, 47])).toBe(13);
});

test("The median of the numbers", () => {
  expect(theMedianNumbers([3, 13, 2, 34, 11, 17, 27, 47])).toBe(15);
});

test("The median of the numbers", () => {
  expect(theMedianNumbers([2, 4, 7, 5, 8, 10])).toBe(6);
});

test("The median of the numbers", () => {
  expect(theMedianNumbers([2, 3, 5, 5, 5, 7, 8])).toBe(5);
});

test("The median of the numbers", () => {
  expect(theMedianNumbers([5,3,2,1,6])).toBe(3);
});
