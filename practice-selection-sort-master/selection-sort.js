function selectionSort(arr) {
  // Copy the original array
  arr = arr.slice();
  // Create an array to store the sorted values
  const sorted = [];
  // While the array is not empty...
  while (arr.length > 0) {
    // Do not move this console.log
    console.log(sorted.join(","));

    // Find the index of the minimum value in the unsorted half
    const minIndex = arr.indexOf(Math.min(...arr));
    // Save and remove the value at the min index
    const minValue = arr.splice(minIndex, 1)[0];
    // Add the min value to the end of the sorted array
    sorted.push(minValue);
  }
  return sorted;
}

function selectionSortInPlace(arr) {
  // Set a pointer at zero diving the array into sorted and unsorted halves
  let pointer = 0;
  // Repeat while the unsorted half is not empty:
  while (arr[pointer] !== undefined) {
    // Do not move this console.log
    console.log(arr.join(","));

    // Save the min value
    const minValue = Math.min(...arr.slice(pointer));

    // Find the index of the minimum value in the unsorted half
    const minIndex = arr.indexOf(minValue, pointer);

    // Shift every unsorted value to the left of the min value to the right by 1
    for (let i = minIndex - 1; i >= pointer; i--) {
      arr[i + 1] = arr[i];
    }

    // Put the min value at the divider
    arr[pointer] = minValue;

    // Increment the divider and repeat
    pointer++;
  }
  return arr;
}

module.exports = [selectionSort, selectionSortInPlace];
