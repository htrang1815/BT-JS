const theLengthLongest = require("./4.9");

test("The length of the longest increasing subsequence of the numbers", () => {
  expect(theLengthLongest([1, 2, 3, 8, 6, 3])).toEqual(3);
});

test("The length of the longest increasing subsequence of the numbers", () => {
  expect(theLengthLongest([1, 2, 3, 8, 9, 10, 11, 12])).toEqual(5);
});

test("The length of the longest increasing subsequence of the numbers", () => {
  expect(theLengthLongest([1, 2, 3, 8, 9, 10, 11, 12])).toEqual(5);
});

test("The length of the longest increasing subsequence of the numbers", () => {
  expect(theLengthLongest([1, 2, 3, 8, 10, 11, 12])).toEqual(3);
});
