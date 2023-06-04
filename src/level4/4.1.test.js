const BubbleSort = require("./4.1");

test("The list sorted by the number of distinct characters in each string", () => {
  expect(BubbleSort([3, 1, 4, 2, 6, 5])).toEqual(4);
});
test("The list sorted by the number of distinct characters in each string", () => {
  expect(BubbleSort([1, 5, 4, 3, 2])).toEqual(6);
});

test("The list sorted by the number of distinct characters in each string", () => {
  expect(BubbleSort([4, 3, 2, 1])).toEqual(6);
});

test("The list sorted by the number of distinct characters in each string", () => {
  expect(BubbleSort([6,0,3,4])).toEqual(3);
});

test("The list sorted by the number of distinct characters in each string", () => {
  expect(BubbleSort([1,0,3,4])).toEqual(1);
});
