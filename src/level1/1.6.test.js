const listAscendingOrder = require("./1.6");

test("Sorts the list in ascending order", () => {
    expect(listAscendingOrder([1,5,3,2,4])).toEqual([1,2,3,4,5]);
  });
test("Sorts the list in ascending order", () => {
    expect(listAscendingOrder([-1,5,3])).toEqual([-1,3,5]);
  });
test("Sorts the list in ascending order", () => {
    expect(listAscendingOrder([0,-1,1,-6,5])).toEqual([-6,-1,0,1,5]);
  });
test("Sorts the list in ascending order", () => {
    expect(listAscendingOrder([0,1,1,6,5])).toEqual([0,1,1,5,6]);
  });
test("Sorts the list in ascending order", () => {
    expect(listAscendingOrder([0,1,1,6,100])).toEqual([0,1,1,6,100]);
  });