const reversesArray = require("./5.1");

test("The reverses array", () => {
  expect(reversesArray([1, 2, 3, 4])).toEqual([4, 3, 2, 1]);
});

test("The reverses array", () => {
  expect(reversesArray(["a", "b", "c", "d"])).toEqual(["d", "c", "b", "a"]);
});

test("The reverses array", () => {
  expect(reversesArray(["aa", "bb", "cc", "dd"])).toEqual([
    "dd",
    "cc",
    "bb",
    "aa",
  ]);
});

test("The reverses array", () => {
  expect(reversesArray(["vu", "huyen", "trang"])).toEqual([
    "trang",
    "huyen",
    "vu",
  ]);
});

test("The reverses array", () => {
  expect(reversesArray(["the", "one", "thing"])).toEqual([
    "thing",
    "one",
    "the",
  ]);
});
