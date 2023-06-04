const largestNum = require("./1.4");

test("Largest Number", () => {
  expect(largestNum([5, 6, 1, 2, 3])).toBe(6);
});

test("Largest Number", () => {
  expect(largestNum([5, 8, 1, 2, 3])).toBe(8);
});

test("Largest Number", () => {
  expect(largestNum([12, 8, 1, 2, -3])).toBe(12);
});

test("Largest Number", () => {
  expect(largestNum([12, 100, 1, 2, -3])).toBe(12);
});
