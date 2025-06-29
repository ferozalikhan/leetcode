function moveZero(nums)
{
    if (nums.length <= 1)
    {
        return nums;
    }
    let i = 0; 
    let j = 1;
    while (j < nums.length) {
        if (nums[i] === 0 && nums[j] !== 0) {
            let temp = nums[i];
            nums[i] = nums[j];
            nums[j] = temp;
            i++;
        } else if (nums[i] !== 0) {
            i++;
        }
        j++;
    }
    return nums;
}

function moveZero2(nums)
{
    let i = 0;
    let j = 0;
    while (i < nums.length) {
        if (nums[i] !== 0) {
            let temp = nums[i];
            nums[i] = nums[j];
            nums[j] = temp;
            j++;
        }
        i++;
    }
    return nums;
}

// Test cases
console.log(moveZero([0,1,0,3,12])); // Output:
console.log(moveZero([4,2,4,0,0,3,0,5,1,0]));
console.log(moveZero([1,0,1])); // Output: [1, 2, 3]

 j
[0,1,0,3,12]
   i
                  i
[1, 3, 12, 0, 0]  
           j