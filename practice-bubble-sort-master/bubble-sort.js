function bubbleSort(arr) {
  // Iterate through the array
  for (let i = 0; i < arr.length - 1; i++) {
    let sorted = true;
    for (let j = 0; j < arr.length - 1; j++) {
      // If the current value is greater than its neighbor to the right
      if (arr[j] > arr[j + 1]) {
        [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
        sorted = false;
        // Do not move this console.log
        console.log(arr.join(","));
      }
      // If you get to the end of the array and no swaps have occurred, return

      // Otherwise, repeat from the beginning
    }
    if (sorted) break;
  }
  return arr;
}

module.exports = bubbleSort;

const arr = [2, 4, 6, 8, 1, 3, 5, 7, 9];
console.log(bubbleSort(arr));
