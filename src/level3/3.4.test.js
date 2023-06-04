const theStringOverlap = require("./3.4");

test("The two strings with the largest overlap of characters", () => {
  expect(
    theStringOverlap(["hello", "world", "foobar", "barfoo", "he", "llo"])
  ).toEqual(["foobar", "barfoo"]);
});

test("The two strings with the largest overlap of characters", () => {
  expect(theStringOverlap(["abcdefg", "cdefghijklm", "ghijklmnopqr"])).toEqual([
    "cdefghijklm",
    "ghijklmnopqr",
  ]);
});

test("The two strings with the largest overlap of characters", () => {
  expect(theStringOverlap(["vu", "thi", "huyen", "trang", "hi"])).toEqual([
    "thi",
    "hi",
  ]);
});

test("The two strings with the largest overlap of characters", () => {
  expect(
    theStringOverlap(["love", "time", "career", "stable", "family"])
  ).toEqual(["career", "stable"]);
});

test("The two strings with the largest overlap of characters", () => {
  expect(theStringOverlap(["12345", "2356", "2222", "77777", "45"])).toEqual([
    "12345",
    "2356",
  ]);
});
