const uniqArrayObject = require("./5.4");

test("The uniq array object", () => {
  expect(
    uniqArrayObject([
      { x: 1, y: 2 },
      { x: 2, y: 1 },
      { x: 1, y: 2 },
    ])
  ).toEqual([
    { x: 1, y: 2 },
    { x: 2, y: 1 },
  ]);
});

test("The uniq array object", () => {
  expect(
    uniqArrayObject([
      { x: 1, y: 2 },
      { x: 3, y: 1 },
      { x: 1, y: 2 },
    ])
  ).toEqual([
    { x: 1, y: 2 },
    { x: 3, y: 1 },
  ]);
});

test("The uniq array object", () => {
  expect(
    uniqArrayObject([
      { x: 1, y: 2 },
      { x: 3, y: 1 },
      { x: 3, y: 2 },
    ])
  ).toEqual([
    { x: 1, y: 2 },
    { x: 3, y: 1 },
    { x: 3, y: 2 },
  ]);
});

test("The uniq array object", () => {
  expect(
    uniqArrayObject([
      { x: 2, y: 2 },
      { x: 2, y: 2 },
      { x: 2, y: 2 },
    ])
  ).toEqual([{ x: 2, y: 2 }]);
});
