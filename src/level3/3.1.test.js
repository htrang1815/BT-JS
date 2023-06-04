const theSecondSmallest = require('./3.1');

test("The second smallest number in the list", () => {
    expect(theSecondSmallest([-2,-3,4,-1,-2,1,5,-3])).toBe(-2);
  });

test("The second smallest number in the list", () => {
    expect(theSecondSmallest([-3,4,-1,1,5,-3])).toBe(-1);
  });

test("The second smallest number in the list", () => {
    expect(theSecondSmallest([4,-1,1,5,2])).toBe(1);
  });

test("The second smallest number in the list", () => {
    expect(theSecondSmallest([4,-1,0,1,5,2])).toBe(0);
  });

test("The second smallest number in the list", () => {
    expect(theSecondSmallest([1,-1,0,1,6,-2])).toBe(-1);
  });