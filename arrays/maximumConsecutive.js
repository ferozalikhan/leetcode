// using one for loop
function countMaximumConsecutive(array) {
  let maxCount = 0;
  let currCount = 0;

  for (let i = 0; i < array.length; i++) {
    if (array[i] === 1) {
      currCount++;
    } else {
      maxCount = Math.max(maxCount, currCount);
      currCount = 0;
    }
  }

  // Handle if array ends with 1s
  return Math.max(maxCount, currCount);
}

// optimized version using reduce
var findMaxConsecutiveOnes = function(nums) {
    let max = 0;
    let last = -1;

    for(let i = 0; i <= nums.length; i++)
    {
        if(nums[i] === 1){
            max = Math.max(max, i - last);
        } else {
            last = i;
        }
    }

    return max;
};


// Example usage:
let array = [1,1,0,1,1,1];
let result = findMaxConsecutiveOnes(array);
console.log(result); // Output: 3

let array2 = [0, 0, 0, 1, 1, 1, 1, 0, 1];
let result2 = findMaxConsecutiveOnes(array2);
console.log(result2); // Output: 4


