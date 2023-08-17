function capitalize(s) {
  return s.slice(0, 1).toUpperCase() + s.slice(1, s.length);
}

function reverseString(s) {
  let reversedString = "";

  for (let i = s.length - 1; i >= 0; i--) {
    reversedString += s[i];
  }

  console.log(reversedString);
  return reversedString;
}

const calculator = {
  add: (num1, num2) => num1 + num2,
  subtract: (num1, num2) => num1 - num2,
  divide: (num1, num2) => num1 / num2,
  multiply: (num1, num2) => num1 * num2,
};

module.exports = { capitalize, reverseString, calculator };
