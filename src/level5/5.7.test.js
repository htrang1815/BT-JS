const mapKey = require("./5.7");

test("The trim all array", () => {
  expect(
    mapKey(
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


test("The trim all array", () => {
  expect(
      mapKey(
          [
              { name: "John", age: 30, gender: "male" },
              { name: "Marry", age: 25, gender: "female" },
              { name: "Tom", age: 35, address: "123 Main St" },
          ],
          ["name", "age", "gender"]
      )
  ).toEqual([
      { name: "John", age: 30, gender: "male" },
      { name: "Marry", age: 25, gender: "female" },
  ]);
});
