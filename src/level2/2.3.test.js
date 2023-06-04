const theLongestCommon = require("./2.3");

test("The longest common common subsequence of the two stringst", () => {
    expect(theLongestCommon("abcdef", "abczyzcdef")).toBe("cdef");
  });

test("The longest common common subsequence of the two stringst", () => {
    expect(theLongestCommon("huyentrang", "yentra")).toBe("yentra");
  });

test("The longest common common subsequence of the two stringst", () => {
    expect(theLongestCommon("abcdef", "abczghcd")).toBe("abc");
  });

test("The longest common common subsequence of the two stringst", () => {
    expect(theLongestCommon("bckhiss", "hissmcbj")).toBe("hiss");
  });

test("The longest common common subsequence of the two stringst", () => {
    expect(theLongestCommon("tranghihi", "hissmcbj")).toBe("hi");
  });