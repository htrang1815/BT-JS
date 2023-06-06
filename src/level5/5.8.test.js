const switchOrder = require("./5.8");

test("The switch order", () => {
  expect(switchOrder(9, 1)).toEqual([
    { id: 10, order: 0 },
    { id: 9, order: 1 },
    { id: 12, order: 2 },
    { id: 11, order: 3 },
  ]);
});

test("The switch order", () => {
  expect(switchOrder(10, 3)).toEqual([
    { id: 11, order: 0 },
    { id: 12, order: 1 },
    { id: 9, order: 2 },
    { id: 10, order: 3 },
  ]);
});
