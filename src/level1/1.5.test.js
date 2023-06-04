const shortestString = require("./1.5");

test("Shortest String", () => {
  expect(shortestString(["5", "66", "111", "22222", "33"])).toEqual(["5"]);
});

test("Shortest String", () => {
  expect(shortestString(["Vu", "Hi", "Huyen", "Trang", "FrontEnd"])).toEqual([
    "Vu",
    "Hi",
  ]);
});

test("Shortest String", () => {
  expect(shortestString(["Vu", "Thu", "Huyen", "Trang", "FrontEnd"])).toEqual([
    "Vu",
  ]);
});

test("Shortest String", () => {
  expect(shortestString(["1356", "222", "Huyen", "Trang", "12356"])).toEqual([
    "222",
  ]);
});

test("Shortest String", () => {
  expect(shortestString(["1", "222", "z", "c", "12356"])).toEqual([
    "1",
    "z",
    "c",
  ]);
});
