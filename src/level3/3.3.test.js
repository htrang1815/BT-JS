const theLongestIncre = require("./3.3");

test("The longest increasing subsequence of the numbers", () => {
  expect(theLongestIncre([3, 10, 2, 1, 20])).toEqual([3, 10, 20]);
});

test("The longest increasing subsequence of the numbers", () => {
  expect(theLongestIncre([50, 3, 10, 7, 40, 80 ])).toEqual([3, 10, 40, 80]);
});

test("The longest increasing subsequence of the numbers", () => {
  expect(theLongestIncre([1, 10 , 7, 40, 80 ])).toEqual([1, 10, 40, 80]);
});

test("The longest increasing subsequence of the numbers", () => {
  expect(theLongestIncre([8, 10 , 7, 40, 80 ])).toEqual([8, 10, 40, 80]);
});

test("The longest increasing subsequence of the numbers", () => {
  expect(theLongestIncre([-8, 10 , -7, 40, 80 ])).toEqual([-8, 10, 40, 80]);
});
