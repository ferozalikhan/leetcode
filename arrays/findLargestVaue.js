function findLargestValue(arr) {
  if (arr.length === 0) {
    return null; // Return null for an empty array
  }

  let largest = arr[0]; // Assume the first element is the largest

  for (let i = 1; i < arr.length; i++) {
    if (arr[i] > largest) {
      largest = arr[i]; // Update largest if a larger value is found
    }
  }

  return largest; // Return the largest value found
}


// Example usage:
let arr = [5, 4, 3, 2, 1];
console.log(findLargestValue(arr)); // Output: 5