module.exports = function reverseString(string) {
  if (typeof string !== "string") {
    throw new TypeError();
  }

  let reversedString = "";
  for (let i = string.length - 1; i >= 0; i--) {
    reversedString += string[i];
  }
  return reversedString;
};
