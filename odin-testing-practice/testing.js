const capitalize = (s) => {
  return s.slice(0, 1).toUpperCase() + s.slice(1, s.length);
};

const reverseString = (s) => {
  let reversedString = "";

  for (let i = s.length - 1; i >= 0; i--) {
    reversedString += s[i];
  }

  console.log(reversedString);
  return reversedString;
};

const calculator = {
  add: (num1, num2) => num1 + num2,
  subtract: (num1, num2) => num1 - num2,
  divide: (num1, num2) => num1 / num2,
  multiply: (num1, num2) => num1 * num2,
};

const caesarCipher = (s, shiftFactor) => {
  const lowerCase = [
    "a",
    "b",
    "c",
    "d",
    "e",
    "f",
    "g",
    "h",
    "i",
    "j",
    "k",
    "l",
    "m",
    "n",
    "o",
    "p",
    "q",
    "r",
    "s",
    "t",
    "u",
    "v",
    "w",
    "x",
    "y",
    "z",
  ];
  const upperCase = [
    "A",
    "B",
    "C",
    "D",
    "E",
    "F",
    "G",
    "H",
    "I",
    "J",
    "K",
    "L",
    "M",
    "N",
    "O",
    "P",
    "Q",
    "R",
    "S",
    "T",
    "U",
    "V",
    "W",
    "X",
    "Y",
    "Z",
  ];

  let convertedString = "";
  let strIdx = 0;

  for (let i = 0; i < s.length; i++) {
    // Lowercase; Uppercase; Symbols and spaces
    if (/[a-zA-Z]/.test(s[i]) && s[i].toLowerCase() === s[i]) {
      strIdx = lowerCase.indexOf(s[i]);
      convertedString += lowerCase[(strIdx + shiftFactor) % 26];
    } else if (/[a-zA-Z]/.test(s[i]) && s[i].toUpperCase() === s[i]) {
      strIdx = upperCase.indexOf(s[i]);
      convertedString += upperCase[(strIdx + shiftFactor) % 26];
    } else {
      convertedString += s[i];
    }
  }

  return convertedString;
};

const analyzeArray = (nums) => {
  let total = 0;
  let average = 0;
  let min = Infinity;
  let max = -Infinity;
  let length = 0;

  for (let i = 0; i < nums.length; i++) {
    total += nums[i];
    if (nums[i] < min) {
      min = nums[i];
    }
    if (nums[i] > max) {
      max = nums[i];
    }
  }

  length = nums.length;
  average = total / length;
  return { average, min, max, length };
};

module.exports = {
  capitalize,
  reverseString,
  calculator,
  caesarCipher,
  analyzeArray,
};
