const theListSorted = require("./4.7");

test("The list sorted by the number of distinct words in each string", () => {
  expect(
    theListSorted([
      "the quick brown fox",
      "the lazy dog jumps over the fence",
      "the cat in the hat",
    ])
  ).toEqual([
    "the lazy dog jumps over the fence",
    "the quick brown fox",
    "the cat in the hat",
  ]);
});
test("The list sorted by the number of distinct words in each string", () => {
  expect(theListSorted(["vu", "huyen", "trang"])).toEqual([
    "huyen",
    "trang",
    "vu",
  ]);
});

test("The list sorted by the number of distinct words in each string", () => {
  expect(theListSorted(["1", "22", "333"])).toEqual(["333", "22", "1"]);
});

test("The list sorted by the number of distinct words in each string", () => {
  expect(theListSorted(["the", "last", "time"])).toEqual([
    "last",
    "time",
    "the",
  ]);
});
