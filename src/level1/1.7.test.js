const listAlphabeticalOrder = require("./1.7");

test("Sorts the list in alphabetical order", () => {
  expect(listAlphabeticalOrder(["March", "Jan", "Feb", "Dec"])).toEqual([
    "Dec",
    "Feb",
    "Jan",
    "March",
  ]);
});

test("Sorts the list in ascending order", () => {
  expect(listAlphabeticalOrder(["c", "a", "b", "d"])).toEqual([
    "a",
    "b",
    "c",
    "d",
  ]);
});

test("Sorts the list in ascending order", () => {
  expect(listAlphabeticalOrder(["Blue", "Humpback", "Beluga"])).toEqual([
    "Beluga",
    "Blue",
    "Humpback",
  ]);
});

test("Sorts the list in ascending order", () => {
  expect(listAlphabeticalOrder(["80", "9", "700"])).toEqual( ['700', '80', '9']);
});
