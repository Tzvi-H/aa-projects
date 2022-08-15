function isFive(num) {
  return num === 5;
}

function isOdd(number) {
  if (typeof number !== "number") {
    throw Error();
  }
  return number % 2 !== 0;
}

function myRange(min, max, step = 1) {
  const array = [];
  for (let i = min; i <= max; i += step) {
    array.push(i);
  }
  return array;
}

module.exports = { isFive, isOdd, myRange };
