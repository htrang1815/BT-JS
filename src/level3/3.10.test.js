const theSortedList = require("./3.10");

test("The list sorted by the number of distinct characters in each string", () => {
  expect(
    theSortedList(["hello", "world", "foobar", "barfoo", "he", "llo"])
  ).toEqual(["he", "llo", "hello", "world", "foobar", "barfoo"]);
});

test("The list sorted by the number of distinct characters in each string", () => {
  expect(
    theSortedList(["apple", "banana", "orange", "kiwi", "strawberry"])
  ).toEqual(["kiwi", "apple", "banana", "orange", "strawberry"]);
});

test("The list sorted by the number of distinct characters in each string", () => {
  expect(theSortedList(["vu", "huyen", "trang", "thi"])).toEqual([
    "vu",
    "thi",
    "huyen",
    "trang",
  ]);
});

test("The list sorted by the number of distinct characters in each string", () => {
  expect(theSortedList(["can", "you", "hear", "my", "heart"])).toEqual([
    "my",
    "can",
    "you",
    "hear",
    "heart",
  ]);
});

test("The list sorted by the number of distinct characters in each string", () => {
  expect(theSortedList(["die", "for", "you", "the", "weeknd"])).toEqual([
    "die",
    "for",
    "you",
    "the",
    "weeknd",
  ]);
});
