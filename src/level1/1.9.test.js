const theNumberWords = require("./1.9");

test("The number of words in the string", () => {
  expect(theNumberWords("Vu Thi Huyen Trang")).toBe(4);
});

test("The number of words in the string", () => {
  expect(theNumberWords("in my heart")).toBe(3);
});

test("The number of words in the string", () => {
  expect(theNumberWords("the important")).toBe(2);
});

test("The number of words in the string", () => {
  expect(theNumberWords("To be ")).toBe(2);
});

test("The number of words in the string", () => {
  expect(theNumberWords(" you are ")).toBe(2);
});