// Insertion Sort out-of-place
// Do not modify the original array
function insertionSort(arr) {
  /*
  Pseudocode:

  Copy the original array
  Create an array to store the sorted values
  While the array is not empty:
  - make sure you have a console.log(sorted.join(',')) as your first line in the while loop
  - Pop a value from the array
  - Create a new spot at the end of the array with null to help with comparisons
  - Walk through the sorted array in reverse order
  - Check if the value to the left is smaller than the new value
  - If so, you've reached the insertion point so exit the loop
  - If not shift the value to the right by 1 and continue
  - Insert the unsorted value at the break point
  Return the sorted array
  */
  // debugger;
  arr = arr.slice();
  const sortedArr = [];
  while (arr.length > 0) {
    console.log(sortedArr.join(","));
    const num = arr.pop();
    sortedArr.push(null);
    let j;
    for (j = sortedArr.length - 2; j >= 0; j--) {
      if (sortedArr[j] < num) {
        break;
      }
      sortedArr[j + 1] = sortedArr[j];
    }
    sortedArr[j + 1] = num;
  }
  console.log(sortedArr);
  return sortedArr;
}

// insertionSort([2, 1]);

// In-place Insertion Sort
// Mutates the original array
function insertionSortInPlace(arr) {
  /*
  Pseudocode:

  Set a pointer dividing the array into sorted and unsorted halves
  Repeat while the unsorted half is not empty:
  - make sure you have a console.log(sorted.join(',')) as your first line in the while loop
  - Grab the first value from the unsorted half
  - For each value starting from the divider,
  - Check if the value to the left is smaller than the unsorted value
  - If so, you've reached the insertion point so exit the loop
  - If not shift the value to the right by 1 and continue
  - Insert the unsorted value at the break point
  - Increment the dividing pointer and repeat
  Return the mutated array
  */
  // [0,3,2,1]
  for (let i = 1; i < arr.length; i++) {
    console.log(arr.join(","));
    const temp = arr[i];
    let j;
    for (j = i - 1; j >= 0; j--) {
      if (arr[j] < temp) {
        break;
      }
      arr[j + 1] = arr[j];
    }
    arr[j + 1] = temp;
  }
  return arr;
}

module.exports = [insertionSort, insertionSortInPlace];
