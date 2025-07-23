

function unionSorted(nums1, nums2) {
  const unionArray = [];
  let i = 0, j = 0;
  let lastAdded = null;

  while (i < nums1.length && j < nums2.length) {
    if (nums1[i] < nums2[j]) {
      if (nums1[i] !== lastAdded) {
        unionArray.push(nums1[i]);
        lastAdded = nums1[i];
      }
      i++;
    } else if (nums1[i] > nums2[j]) {
      if (nums2[j] !== lastAdded) {
        unionArray.push(nums2[j]);
        lastAdded = nums2[j];
      }
      j++;
    } else {
      if (nums1[i] !== lastAdded) {
        unionArray.push(nums1[i]);
        lastAdded = nums1[i];
      }
      i++;
      j++;
    }
  }

  // Add remaining elements from nums1
  while (i < nums1.length) {
    if (nums1[i] !== lastAdded) {
      unionArray.push(nums1[i]);
      lastAdded = nums1[i];
    }
    i++;
  }

  // Add remaining elements from nums2
  while (j < nums2.length) {
    if (nums2[j] !== lastAdded) {
      unionArray.push(nums2[j]);
      lastAdded = nums2[j];
    }
    j++;
  }

  return unionArray;
}

// Example usage:
let nums1 = [1,2,3,4,5,6,7,8,9,10];
let nums2 = [2,3,4,4,5,11,12];
let result = unionSorted(nums1, nums2);
console.log(result); // Output: [1, 2, 3, 4, 5]