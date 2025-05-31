function longestConsecutive(nums) {
    if(nums.length === 0) return 0;
    nums = [...new Set(nums)];
    for (let i = 0; i < nums.length; i++) {
        for (let j = i; j < nums.length; j++) {
            if (nums[i] > nums[j]) {
                let temp = nums[i];
                nums[i] = nums[j];
                nums[j] = temp;
            }
        }
    }
    let count = 1;
    let max = 1;
    let j = 0;
    for (let i = 0; i < nums.length; i++) {
            if (nums[i] + 1 === nums[i + 1]) count++;
            else {
                if(count > max)
                {
                    max = count;
                }
                count = 1;
            }
    }
    // return nums;
    return max;
};


let nums =  [0,3,2,5,4,6,1,1]

console.log(longestConsecutive(nums));