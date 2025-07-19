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

function findSecondLargestValue(arr) {
  if (arr.length < 2) {
    return null; // Return null if there are less than two elements
  }

  let largest = -Infinity;
  let secondLargest = -Infinity;

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > largest) {
      secondLargest = largest; // Update second largest
      largest = arr[i]; // Update largest
    } else if (arr[i] > secondLargest && arr[i] !== largest) {
      secondLargest = arr[i]; // Update second largest if it's not equal to the largest
    }
  }

  return secondLargest; // Return the second largest value found
}
// Example usage:
let arr2 = [5, 4, 3, 2, 1];
console.log(findSecondLargestValue(arr2)); // Output: 4