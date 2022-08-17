function myMap(inputArray, callback) {
  const array = [];
  for (let i = 0; i < inputArray.length; i++) {
    array.push(callback(inputArray[i]));
  }
  return array;
}

module.exports = myMap;
