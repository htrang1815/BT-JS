const theMaxProduct = require("./4.6");

test("The maximum product of any three distinct elements in the list.", () => {
  expect(theMaxProduct([-10, -5, 0, 1, 2, 3, 4])).toEqual(200);
});

test("The maximum product of any three distinct elements in the list.", () => {
  expect(theMaxProduct([-10, 0, 0, 1, 2, 3, 4])).toEqual(24);
});

test("The maximum product of any three distinct elements in the list.", () => {
  expect(theMaxProduct([-10, -20, 0, 1, 2, 3, 4])).toEqual(800);
});

test("The maximum product of any three distinct elements in the list.", () => {
  expect(theMaxProduct([10, -20, 0, 1, 2, 3, 4])).toEqual(120);
});

test("The maximum product of any three distinct elements in the list.", () => {
  expect(theMaxProduct([0, 2, 0, 1, 2, 3, 4])).toEqual(24);
});
