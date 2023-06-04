const theSmallestPosInt = require('./3.5');

test("the smallest positive integer", () => {
    expect(theSmallestPosInt([1, 2, 3, 7, 8, 20])).toEqual(42);
  });

test("the smallest positive integer", () => {
    expect(theSmallestPosInt([ 1, 3, 4, 5 ])).toEqual(2);
  });

test("the smallest positive integer", () => {
    expect(theSmallestPosInt([ 1, 2, 6, 10, 11, 15 ])).toEqual(4);
  });

test("the smallest positive integer", () => {
    expect(theSmallestPosInt([ 1, 1, 3, 4 ])).toEqual(10);
  });

test("the smallest positive integer", () => {
    expect(theSmallestPosInt([ 1, 2, 3, 4 ])).toEqual(11);
  });