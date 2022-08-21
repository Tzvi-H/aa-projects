// Convert the integers in the console.logs below to base 16:

/******************************************************************************/
const { convertToBase10 } = require("./1-convertToBase10");

const convertToBase16 = (element) => {
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
    10: "a",
    11: "b",
    12: "c",
    13: "d",
    14: "e",
    15: "f",
  };

  if (typeof element === "string") {
    element = convertToBase10(element);
  }

  let result = "";

  let log16 = Math.floor(Math.log(element) / Math.log(16));
  for (let i = 0; i <= log16; i++) {
    result += "0";
  }
  for (let i = 0; i < result.length; i++) {
    let position = result.length - 1 - i;
    let power = 16 ** position;
    if (element / power >= 1) {
      const num = Math.floor(element / power);
      result = result.split("");
      result[i] = hexValues[num];
      result = result.join("");
      element -= num * power;
    }
  }

  return "0x" + result;
};

/******************************************************************************/

// console.log(convertToBase16(4)); // 0x4
// console.log(convertToBase16(65)); // 0x41
// console.log(convertToBase16(256)); // 0x100
// console.log(convertToBase16(123)); // 0x7b
// console.log(convertToBase16(1000)); // 0x3e8

// console.log("––––––");

// console.log(convertToBase16("0b1100")); // 0xc
// console.log(convertToBase16("0b0101")); // 0x5
// console.log(convertToBase16("0b1000")); // 0x8
// console.log(convertToBase16("0b0111")); // 0x7

// console.log("––––––");

// console.log(convertToBase16("0b10100101")); // 0xa5
// console.log(convertToBase16("0b11111111")); // 0xff
// console.log(convertToBase16("0b01010101")); // 0x55
// console.log(convertToBase16("0b00110011")); // 0x33
