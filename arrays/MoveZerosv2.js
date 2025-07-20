function moveZeros(nums)
{
    for(let i = 0; i < nums.length; i ++)
    {
        let j = i + 1;
        if(nums[i] === 0)
        {
            // swap i and j where j is non zero index
            // set j to non zero
            while(j < nums.length )
            {
                if(nums[j] != 0)
                {
                    [nums[i], nums[j]] = [nums[j], nums[i]];
                    break;
                }
                j ++;
                if( j === nums.length)
                {
                    return nums; // if j reaches end of array, no non zero found
                }
            }
        }
    }
    return nums;
}

// Example usage:
let arr = [0, 1, 0, 3, 12];
arr = moveZeros(arr);
console.log(arr); // Output: [1, 3, 12, 0, 0]