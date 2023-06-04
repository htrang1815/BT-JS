const theMaxBetween = require('./3.2');

test("The maximum difference between any two elements in the list", () => {
    expect(theMaxBetween([1, 2, 91, 9, 100])).toBe(99);
  });

test("The maximum difference between any two elements in the list", () => {
    expect(theMaxBetween([1, 2, 8, 9, 10])).toBe(9);
  });

test("The maximum difference between any two elements in the list", () => {
    expect(theMaxBetween([-1, -2, 8, -9, 10])).toBe(19);
  });

test("The maximum difference between any two elements in the list", () => {
    expect(theMaxBetween([-1, 2, 8, 0, 10])).toBe(11);
  });

test("The maximum difference between any two elements in the list", () => {
    expect(theMaxBetween([-1, 1, 1, 1, 1])).toBe(2);
  });