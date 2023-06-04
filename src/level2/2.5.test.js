const theMaxSum = require("./2.5");

test("The maximum sum of any contiguous subarray within the list", () => {
    expect(theMaxSum([-2,-3,4,-1,-2,1,5,-3])).toBe(7);
  });

test("The maximum sum of any contiguous subarray within the list", () => {
    expect(theMaxSum([1, -2, 1, 1, -2, 1])).toBe(2);
  });

test("The maximum sum of any contiguous subarray within the list", () => {
    expect(theMaxSum([4, -1, -2, 1, 5])).toBe(7);
  });

test("The maximum sum of any contiguous subarray within the list", () => {
    expect(theMaxSum([-2,1,-3,4,-1,2,1,-5,4])).toBe(6);
  });

test("The maximum sum of any contiguous subarray within the list", () => {
    expect(theMaxSum([5,4,-1,7,8])).toBe(23);
  });