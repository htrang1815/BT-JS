const theSecondLargest = require("./2.1");

test("The second largest number in the list", () => {
  expect(theSecondLargest([70, 11, 20, 4, 100])).toBe(70);
});

test("The second largest number in the list", () => {
  expect(theSecondLargest([70, 11, 20, 4, 90, 100])).toBe(90);
});

test("The second largest number in the list", () => {
  expect(theSecondLargest([1, 5, 3, 2, 6])).toBe(5);
});

test("The second largest number in the list", () => {
  expect(theSecondLargest([-1, -5, -3, -2, -6])).toBe(-2);
});

test("The second largest number in the list", () => {
  expect(theSecondLargest([1, -5, -3, 0, -6])).toBe(0);
});
