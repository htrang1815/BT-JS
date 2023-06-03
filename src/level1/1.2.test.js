const lengthStr = require("./1.2");

test("Length String", () => {
    expect(lengthStr("Vu")).toBe(2);
  });

test("Length String", () => {
    expect(lengthStr("Thi")).toBe(3);
  });

test("Length String", () => {
    expect(lengthStr("Huyen")).toBe(5);
  });

test("Length String", () => {
    expect(lengthStr("Trang")).toBe(5);
  });

test("Length String", () => {
    expect(lengthStr("FrontEnd")).toBe(8);
  });