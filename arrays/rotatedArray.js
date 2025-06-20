function rotatedArray(array, target)
{
    let left = 0;
    let right = array.length - 1;

    while (left <= right) {
        const mid = Math.floor((left + right) / 2);

        if (array[mid] === target) {
            return mid; // Target found
        }

        // Determine which side is sorted
        if (array[left] <= array[mid]) { // Left side is sorted
            if (array[left] <= target && target < array[mid]) {
                right = mid - 1; // Target is in the left sorted side
            } else {
                left = mid + 1; // Target is in the right side
            }
        } else { // Right side is sorted
            if (array[mid] < target && target <= array[right]) {
                left = mid + 1; // Target is in the right sorted side
            } else {
                right = mid - 1; // Target is in the left side
            }
        }
    }

    return -1; // Target not found
}

// Example usage:
const rotatedArr = [4, 5, 6, 7, 0, 1, 2, 3];
const target = 0;
const index = rotatedArray(rotatedArr, target);
console.log(`Target ${target} found at index: ${index}`); // Output: Target