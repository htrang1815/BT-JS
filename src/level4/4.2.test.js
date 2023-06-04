const theNumberDistSub = require("./4.2");

test("The list sorted by the number of distinct characters in each string", () => {
  expect(theNumberDistSub([1, 2, 3, 4, 5], 5)).toEqual(3);
});

test("The list sorted by the number of distinct characters in each string", () => {
  expect(theNumberDistSub([1, 1, 2, 3, 4], 5)).toEqual(4);
});

test("The list sorted by the number of distinct characters in each string", () => {
  expect(theNumberDistSub([3,5,6,7], 9)).toEqual(1);
});

test("The list sorted by the number of distinct characters in each string", () => {
  expect(theNumberDistSub([3,3,6,8], 6)).toEqual(2);
});
