const chunkArray = require("./5.2");

test("The chunk array", () => {
  expect(chunkArray(["a", "b", "c", "d"], 2)).toEqual([
    ["a", "b"],
    ["c", "d"],
  ]);
});

test("The chunk array", () => {
  expect(chunkArray(["a", "b", "c", "d"], 3)).toEqual([["a", "b", "c"], ["d"]]);
});

test("The chunk array", () => {
  expect(chunkArray(["a", "b", "c", "d"], 1)).toEqual([
    ["a"],
    ["b"],
    ["c"],
    ["d"],
  ]);
});

test("The chunk array", () => {
  expect(chunkArray(["a", "b", "c", "d"], 0)).toEqual(["a", "b", "c", "d"]);
});
