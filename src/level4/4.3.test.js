const theLongestSub = require("./4.3");

test("The longest substring that appears in every string in the list.", () => {
  expect(theLongestSub(["abcdefg", "abcde", "abcdef", "ab", "abc"])).toEqual(2);
});

test("The longest substring that appears in every string in the list.", () => {
  expect(theLongestSub(["programming", "programmer", "program"])).toEqual(7);
});

test("The longest substring that appears in every string in the list.", () => {
  expect(theLongestSub(["abcd", "ab", "abcd", "ab", "abcd"])).toEqual(2);
});

test("The longest substring that appears in every string in the list.", () => {
  expect(theLongestSub(["hello", "world", "jelly"])).toEqual(1);
});

test("The longest substring that appears in every string in the list.", () => {
  expect(theLongestSub(["l", "jelly"])).toEqual(1);
});
