const stringLength = require("./stringLength");

test('stringLength("hello dev") should return 9', () => {
  expect(stringLength("hello dev")).toBe(9);
});

test('stringLength("") should return "String must be between 1 and 10 characters"', () => {
  expect(stringLength("")).toBe("String must be between 1 and 10 characters");
});

test('stringLength("This string is longer than 10 characters") should return "String must be between 1 upto 10 characters"', () => {
  expect(
    stringLength("This string is longer than 10 characters")
  ).toBe("String must be between 1 upto 10 characters");
});

test("stringLength(123) should throw an error", () => {
  expect(() => {
    stringLength(123);
  }).toThrow();
});

test("stringLength() should throw an error", () => {
  expect(() => {
    stringLength();
  }).toThrow();
});

test("stringLength([]) should throw an error", () => {
  expect(() => {
    stringLength([]);
  }).toThrow();
});

test("stringLength({}) should throw an error", () => {
  expect(() => {
    stringLength({});
  }).toThrow();
});

test("stringLength(true) should throw an error", () => {
  expect(() => {
    stringLength(true);
  }).toThrow();
});
