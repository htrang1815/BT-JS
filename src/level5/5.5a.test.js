const uniqArrayObject = require("./5.5a");

test("Group by array object", () => {
  expect(
    uniqArrayObject(
      [
        { a: 1, b: 2 },
        { a: 1, b: 3 },
        { a: 2, b: 2 },
      ],
      "a"
    )
  ).toEqual({
    1: [
      { a: 1, b: 2 },
      { a: 1, b: 3 },
    ],
    2: [{ a: 2, b: 2 }],
  });
});

test("Group by array object", () => {
  expect(
    uniqArrayObject(
      [
        { x: 1, b: 2 },
        { x: 3, b: 3 },
        { x: 2, b: 2 },
      ],
      "x"
    )
  ).toEqual({
    1: [{ x: 1, b: 2 }],
    3: [{ x: 1, b: 3 }],
    2: [{ x: 2, b: 2 }],
  });
});
