const MapKey = require("./5.7");

test("The trim all array", () => {
  expect(
    MapKey(
      [
        { a: 1, b: 1, c: 2, d: 4, e: 5 },
        { a: 2, b: 1, c: 5, d: 4, e: 5 },
        { d: 4, e: 5, a: 22, b: 11, c: 51 },
      ],
      ["b", "a", "c"]
    )
  ).toEqual([
    { b: 1, a: 1, c: 2 },
    { b: 1, a: 2, c: 5 },
    { b: 11, a: 22, c: 51 },
  ]);
});
