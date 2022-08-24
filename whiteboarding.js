function logBetween(lowNum, highNum) {
  const differenceCount = highNum - lowNum + 1;
  const array = new Array(Math.max(0, differenceCount));
  for (let i = 0; i < differenceCount; i++) {
    array[i] = lowNum;
    lowNum++;
  }
  return array;
}

function logBetweenStepper(min, max, step) {
  const differenceCount = (max - min) / step + 1;
  const array = new Array(Math.max(0, differenceCount));
  for (let i = 0; i < differenceCount; i++) {
    array[i] = min;
    min += step;
  }
  return array;
}

function printReverse(min, max) {
  const differenceCount = max - min - 1;
  const array = new Array(Math.max(0, differenceCount));
  for (let i = 0; i < differenceCount; i++) {
    array[i] = max - 1;
    max--;
  }
  return array;
}

function fizzBuzz(max) {
  const array = [];
  for (let i = 0; i < max; i++) {
    if ((i % 3 === 0 && i % 5 !== 0) || (i % 3 !== 0 && i % 5 === 0)) {
      array.push(i);
    }
  }
  console.log(array);
}

fizzBuzz(20); // => [3, 5, 6, 9, 10, 12, 18]
