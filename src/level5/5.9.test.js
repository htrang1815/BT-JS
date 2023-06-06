const sumAll = require("./5.9");

test("The sum all", () => {
  expect(
    sumAll([
      { a: 2, b: 10 },
      { a: 12, c: 11 },
      { a: 8, b: 14, d: 20 },
      { a: '8' },
    ])
  ).toEqual({ a: 30, b: 24, c: 11, d: 20 });
});

test("The sum all", () => {
  expect(
    sumAll([
      { a: 1, b: 10, e: 10 },
      { a: 12, c: 11 },
      { a: 8, b: 14, d: 20 },
      { a: "8" },
    ])
  ).toEqual({ a: 29, b: 24, e: 10, c: 11, d: 20 });
});
