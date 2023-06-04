const trimAll = require("./5.6");

test("The trim all array", () => {
  expect(trimAll("    hello     world    ")).toEqual("hello world");
});

test("The trim all array", () => {
  expect(trimAll("   I    am    good     ")).toEqual("I am good");
});

test("The trim all array", () => {
  expect(trimAll("   confidence    is    key     ")).toEqual(
    "confidence is key"
  );
});

test("The trim all array", () => {
  expect(trimAll("   lobe    quote    key     ")).toEqual("lobe quote key");
});

test("The trim all array", () => {
  expect(trimAll("   lobequotekey     ")).toEqual("lobequotekey");
});
