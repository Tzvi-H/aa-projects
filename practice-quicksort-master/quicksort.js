function quicksort(arr) {
  debugger;
  // Check if the input is length 1 or less
  // If so, it's already sorted: return
  if (arr.length <= 1) {
    return arr;
  }
  // Pick the first value as the pivot
  const pivot = arr[0];
  // Orient the pivot so that...
  // every number smaller than the pivot is to the left
  // every number larger (or equal) than the pivot is to the right
  const leftArray = [];
  const rightArray = [];

  for (let i = 1; i < arr.length; i++) {
    if (arr[i] < pivot) {
      leftArray.push(arr[i]);
    } else {
      rightArray.push(arr[i]);
    }
  }

  // Recursively sort the left
  const leftSorted = quicksort(leftArray);

  // Recursively sort the right
  const rightSorted = quicksort(rightArray);

  // Return the left, pivot and right in sorted order
  return [...leftSorted, pivot, ...rightSorted];
}

module.exports = [quicksort];
