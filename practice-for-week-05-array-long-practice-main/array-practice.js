const findMinimum = (arr) => {
  if (arr.length === 0) return undefined;
  let min = Infinity;
  arr.forEach((num) => {
    if (num < min) {
      min = num;
    }
  });
  return min;
};
const arr = [7, 5, 2, 3, 4, 1];
findMinimum(arr); // => 1

const twoSum = (arr, target) => {
  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr.length; j++) {
      if (i !== j && arr[i] + arr[j] === target) {
        return true;
      }
    }
  }
  return false;
};

const shuffle = (arr) => {
  return arr.slice().sort((a, b) => {
    if (Math.random() >= 0.5) {
      return -1;
    } else {
      return 1;
    }
  });
};

const evenNumOfChars = (arr) => {
  return arr.filter((str) => str.length % 2 === 0).length;
};

const runningSum = (arr) => {
  const sum = [];
  for (let i = 0; i < arr.length; i++) {
    if (i === 0) {
      sum[i] = arr[i];
    } else {
      sum[i] = arr[i] + sum[i - 1];
    }
  }
  return sum;
};
const smallerThanCurr = (arr) => {
  const result = [];
  for (let i = 0; i < arr.length; i++) {
    const current = arr[i];
    let count = 0;
    for (let j = 0; j < arr.length; j++) {
      if (arr[j] < current) {
        count++;
      }
    }
    result[i] = count;
  }
  return result;
};
const secondLargest = (arr) => {
  if (arr.length < 2) return;

  let largest = -Infinity;
  let secondLargest = -Infinity;

  for (let i = 0; i < arr.length; i++) {
    const num = arr[i];
    if (num > largest) {
      secondLargest = largest;
      largest = num;
    } else if (num > secondLargest) {
      secondLargest = num;
    }
  }

  return secondLargest;
};

module.exports = [
  findMinimum,
  runningSum,
  evenNumOfChars,
  smallerThanCurr,
  twoSum,
  secondLargest,
  shuffle,
];
