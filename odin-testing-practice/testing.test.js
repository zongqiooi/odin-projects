const {
  capitalize,
  reverseString,
  calculator,
  caesarCipher,
  analyzeArray,
} = require("./testing");

it("Capitalizing 'ashleynguci' to 'Ashleynguci'", () => {
  expect(capitalize("ashleynguci")).toBe("Ashleynguci");
});

it("Reversing 'ashleynguci' to 'icugnyelhsa'", () => {
  expect(reverseString("ashleynguci")).toEqual("icugnyelhsa");
});

it("Adding 6 + 4 to 10 ", () => {
  expect(calculator.add(4, 6)).toEqual(10);
});

it("Subtract 6 - 4 to 2 ", () => {
  expect(calculator.subtract(6, 4)).toEqual(2);
});

it("Divide 6 / 4 to 1.5 ", () => {
  expect(calculator.divide(6, 4)).toEqual(1.5);
});

it("Multiply 6 * 4 to 24 ", () => {
  expect(calculator.multiply(6, 4)).toEqual(24);
});

it("Caesar cipher of 'abc' shifted by 0 to be 'abc'", () => {
  expect(caesarCipher("abc", 0)).toEqual("abc");
});

it("Caesar cipher of 'abc' shifted by 1 to be 'bcd'", () => {
  expect(caesarCipher("abc", 1)).toEqual("bcd");
});

it("Caesar cipher of 'az' shifted by 5 to be 'fe'", () => {
  expect(caesarCipher("az", 5)).toEqual("fe");
});

it("Caesar cipher of 'a, b, c' shifted by 1 to be 'b, c, d'", () => {
  expect(caesarCipher("a, b, c", 1)).toEqual("b, c, d");
});

it("Caesar cipher of 'ABc' shifted by 3 to be 'DEf'", () => {
  expect(caesarCipher("ABc", 3)).toEqual("DEf");
});

it("Caesar cipher of 'aB, c' shifted by 3 to be 'dE, f'", () => {
  expect(caesarCipher("aB, c", 3)).toEqual("dE, f");
});

it("Analyze the array of [1,8,3,4,2,6] to be {average: 4, min: 1, max: 8, length: 6}", () => {
  expect(analyzeArray([1, 8, 3, 4, 2, 6])).toEqual({
    average: 4,
    min: 1,
    max: 8,
    length: 6,
  });
});
