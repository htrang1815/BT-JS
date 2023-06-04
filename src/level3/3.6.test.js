const theMedianCombined = require("./3.6");

test("The median of the combined list", () => {
  expect(theMedianCombined([3, 13, 2, 34], [11, 26, 47])).toEqual(13);
});

test("The median of the combined list", () => {
  expect(theMedianCombined([3, 13, 2, 34], [11, 17, 27, 47])).toEqual(15);
});

test("The median of the combined list", () => {
  expect(theMedianCombined([2, 4, 7], [5, 8, 10])).toEqual(6);
});

test("The median of the combined list", () => {
  expect(theMedianCombined([2, 3, 5, 5], [5, 8, 10])).toEqual(5);
});

test("The median of the combined list", () => {
  expect(theMedianCombined([5, 3, 2], [1, 6])).toEqual(3);
});
