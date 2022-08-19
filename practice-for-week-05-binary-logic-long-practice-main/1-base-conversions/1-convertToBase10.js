// Convert the integers in the console.logs below to base 10:

/******************************************************************************/

const convertToBase10 = (str) => {
  const hexValues = {
    0: 0,
    1: 1,
    2: 2,
    3: 3,
    4: 4,
    5: 5,
    6: 6,
    7: 7,
    8: 8,
    9: 9,
    a: 10,
    b: 11,
    c: 12,
    d: 13,
    e: 14,
    f: 15,
  };
  const type = str[1];
  const number = str.slice(2);
  let result = 0;
  if (type === "b") {
    let base = 1;
    for (let i = number.length - 1; i >= 0; i--) {
      if (number[i] === "1") {
        result += base;
      }
      base *= 2;
    }
  } else if (type === "x") {
    let base = 1;
    for (let i = number.length - 1; i >= 0; i--) {
      result += base * hexValues[number[i]];
      base *= 16;
    }
  }
  return result;
};

/******************************************************************************/

// console.log(convertToBase10("0b1100")); // 12
// console.log(convertToBase10("0b0101")); // 5
// console.log(convertToBase10("0b1000")); // 8
// console.log(convertToBase10("0b0111")); // 7

// console.log("––––––");

// console.log(convertToBase10("0b10100101")); // 165
// console.log(convertToBase10("0b11111111")); // 255
// console.log(convertToBase10("0b01010101")); // 85
// console.log(convertToBase10("0b00110011")); // 51

// console.log("––––––");

// console.log(convertToBase10("0xf")); // 15
// console.log(convertToBase10("0xfa")); // 250
// console.log(convertToBase10("0x1234")); // 4660
// console.log(convertToBase10("0xc9a1")); // 51617
// console.log(convertToBase10("0xbf12")); // 48914

module.exports = {
  convertToBase10,
};
