// Merge Sort out-of-place
// Do not modify the original array
function mergeSort(arr) {
  // Check if the input is length 1 or less
  // If so, it's already sorted: return
  if (arr.length <= 1) return arr;

  // Divide the array in half
  const leftArray = arr.slice(0, arr.length / 2);
  const rightArray = arr.slice(arr.length / 2);

  // Recursively sort the left half
  const leftSorted = mergeSort(leftArray);

  // Recursively sort the right half
  const rightSorted = mergeSort(rightArray);

  // Merge the halves together and return
  return merge(leftSorted, rightSorted);
}

// Takes in two sorted arrays and returns them merged into one
function merge(arrA, arrB) {
  // Create an empty return array
  const result = [];

  // Point to the first value of each array
  let aPointer = 0;
  let bPointer = 0;

  // While there are still values in each array...
  while (arrA[aPointer] !== undefined && arrB[bPointer] !== undefined) {
    // Compare the first values of each array
    // Add the smaller value to the return array
    // Move the pointer to the next value in that array
    if (arrA[aPointer] < arrB[bPointer]) {
      result.push(arrA[aPointer]);
      aPointer++;
    } else {
      result.push(arrB[bPointer]);
      bPointer++;
    }
  }

  while (arrA[aPointer] !== undefined) {
    result.push(arrA[aPointer]);
    aPointer++;
  }

  while (arrB[bPointer] !== undefined) {
    result.push(arrB[bPointer]);
    bPointer++;
  }

  // Return the return array
  return result;
}

module.exports = [merge, mergeSort];
