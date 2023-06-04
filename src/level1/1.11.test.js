const theNumberStra = require("./1.11");

test("The number of words in the string", () => {
  expect(theNumberStra(["Vu", "Thi", "Huyen", "Trang"])).toBe(1);
});

test("The number of words in the string", () => {
  expect(theNumberStra(["Vu", "Ha", "Huyen", "Trang"])).toBe(2);
});

test("The number of words in the string", () => {
  expect(theNumberStra(["Star", "Ha", "Huyen", "Trang"])).toBe(3);
});

test("The number of words in the string", () => {
  expect(theNumberStra(["Star", "Ha", "May", "Trang"])).toBe(4);
});

test("The number of words in the string", () => {
  expect(theNumberStra(["Star Moon", "Ha", "May", "Trang"])).toBe(4);
});
