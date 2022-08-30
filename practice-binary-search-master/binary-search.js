function linearSearch(arr, target) {
  return arr.indexOf(target);
}

function binarySearch(arr, target) {
  // Set integers pointing to the high and low range of possible indices
  let high = arr.length - 1;
  let low = 0;
  // While high and low indices do not overlap...
  while (low <= high) {
    // Find the midpoint between high and low indices
    const mid = Math.floor(low + (high - low) / 2);
    // Compare the target value to the midpoint value
    const midValue = arr[mid];
    // If the target equals the midpoint...
    if (midValue === target) {
      // Return the midpoint index
      return mid;
    } else if (target > midValue) {
      // If the target is higher than the midpoint...
      // Move the low pointer to midpoint + 1
      low = mid + 1;
    } else {
      // If the target is less than the midpoint...
      // Move the high pointer to midpoint - 1
      high = mid - 1;
    }
  }
  return -1;
  // Return -1 if the loop exits with overlapping pointers
}

module.exports = [linearSearch, binarySearch];
