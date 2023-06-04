const uniqArray = require("./5.3");

test("The uniq array", () => {
  expect(uniqArray([1, 2, 3, 2, 4])).toEqual([1, 2, 3, 4]);
});

test("The uniq array", () => {
  expect(uniqArray([1, 2, 3, 3, 2, 4])).toEqual([1, 2, 3, 4]);
});

test("The uniq array", () => {
  expect(uniqArray([1,1,2,2])).toEqual([1, 2]);
});

test("The uniq array", () => {
  expect(uniqArray(["a","b","c","d"])).toEqual(["a","b","c","d"]);
});
