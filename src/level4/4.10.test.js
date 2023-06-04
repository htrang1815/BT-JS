const theLengthLongest = require("./4.10");

test("The length of the longest increasing subsequence of the numbers", () => {
  expect(
    theLengthLongest(["abcdefg", "cdefghijklm", "ghijklmnopqr"], 3)
  ).toEqual(["cdefghijklm", "ghijklmnopqr"]);
});

test("The length of the longest increasing subsequence of the numbers", () => {
  expect(theLengthLongest(["abcdef", "abczyzcdef", "ghijklmnopqr"], 3)).toEqual(
    ["abcdef", "abczyzcdef"]
  );
});

test("The length of the longest increasing subsequence of the numbers", () => {
  expect(theLengthLongest(["abc", "def", "ghk"], 3)).toEqual(0);
});

test("The length of the longest increasing subsequence of the numbers", () => {
  expect(theLengthLongest(["abc", "abcdef", "abczghcd"], 2)).toEqual([
    "abc",
    "abcdef",
  ]);
});
