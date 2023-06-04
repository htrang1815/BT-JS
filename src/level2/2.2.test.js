const theLongestWord = require("./2.2");

test("The longest word in the list", () => {
  expect(theLongestWord(["5", "66", "111", "22222", "33"])).toEqual(["22222"]);
});

test("The longest word in the list", () => {
  expect(theLongestWord(["Vu", "Hi", "Huyen", "Trang", "FrontEnd"])).toEqual(["FrontEnd"]);
});

test("The longest word in the list", () => {
  expect(theLongestWord(["Vu", "Hi", "Huyen", "Trang"])).toEqual(["Huyen", "Trang"]);
});

test("The longest word in the list", () => {
  expect(theLongestWord(["Vu", "Hiii", "Huyen", "Trang"])).toEqual(["Huyen", "Trang"]);
});

test("The longest word in the list", () => {
  expect(theLongestWord(["Vu", "Hiii", "Huyen", "Trang"])).toEqual(["Huyen", "Trang"]);
});

