// Convert the integers in the console.logs below to base 2

/******************************************************************************/

const { convertToBase10 } = require("./1-convertToBase10");

const convertToBase2 = (element) => {
  let result = "";
  if (typeof element === "string") {
    element = convertToBase10(element);
  }
  let log2 = Math.floor(Math.log2(element));
  for (let i = 0; i <= log2; i++) {
    result += "0";
  }
  for (let i = 0; i < result.length; i++) {
    let position = result.length - 1 - i;
    let power = 2 ** position;

    if (element / power >= 1) {
      result = result.slice(0, i) + "1" + result.slice(i + 1);
      element -= power;
    }
  }
  return "0b" + result;
};

module.exports = { convertToBase2 };
/******************************************************************************/

// console.log(convertToBase2(4) === "0b100"); //
// console.log(convertToBase2(65) === "0b1000001"); //
// console.log(convertToBase2(256) === "0b100000000"); //
// console.log(convertToBase2(123) === "0b1111011"); //
// console.log(convertToBase2(1000) === "0b1111101000"); //

// console.log("––––––");

// console.log(convertToBase2("0xf") === "0b1111"); // 0b1111
// console.log(convertToBase2("0xfa") === "0b11111010"); // 0b11111010
// console.log(convertToBase2("0x1234") === "0b1001000110100"); // 0b1001000110100
// console.log(convertToBase2("0xc9a1") === "0b1100100110100001"); // 0b1100100110100001
// console.log(convertToBase2("0xbf12") === "0b1011111100010010"); // 0b1011111100010010
