const theLongestPalindrome = require("./3.7");

test("The smallest positive integer that cannot be represented as the sum of any subset of the list", () => {
  expect(theLongestPalindrome("awa")).toEqual(3);
});

test("The smallest positive integer that cannot be represented as the sum of any subset of the list", () => {
  expect(theLongestPalindrome("A man a plan a canal Panama")).toEqual(21);
});

test("The smallest positive integer that cannot be represented as the sum of any subset of the list", () => {
  expect(theLongestPalindrome("forgeeksskeegfor")).toEqual(10);
});

test("The smallest positive integer that cannot be represented as the sum of any subset of the list", () => {
  expect(theLongestPalindrome("geeks")).toEqual(2);
});

test("The smallest positive integer that cannot be represented as the sum of any subset of the list", () => {
  expect(theLongestPalindrome("geeksskeeg")).toEqual(10);
});
