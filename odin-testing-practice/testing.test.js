const { capitalize, reverseString, calculator } = require("./testing");

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
