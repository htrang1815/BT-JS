const theSumNumber = require("./2.4");

test("The sum of the numbers that are divisible by both 3 and 5.", () => {
  expect(theSumNumber([1, 2, 3, 4, 5])).toBe(0);
});

test("The sum of the numbers that are divisible by both 3 and 5.", () => {
  expect(theSumNumber([1, 2, 30, 3, 4, 15])).toBe(45);
});

test("The sum of the numbers that are divisible by both 3 and 5.", () => {
  expect(theSumNumber([1, 2, 30, 3, 4, -15])).toBe(15);
});

test("The sum of the numbers that are divisible by both 3 and 5.", () => {
  expect(theSumNumber([60, 2, 30, 3, 4, -15])).toBe(75);
});

test("The sum of the numbers that are divisible by both 3 and 5.", () => {
  expect(theSumNumber([6, 2, 15, 3, 4, -15])).toBe(0);
});
