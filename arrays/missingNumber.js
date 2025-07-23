function binarySearch(start, end, nums) {
    if (start >= end) return start;

    const mid = Math.floor((start + end) / 2);

    if (nums[mid] === mid) {
        // Left side is correct, look right
        return binarySearch(mid + 1, end, nums);
    } else {
        // Mismatch, missing is in left side
        return binarySearch(start, mid, nums);
    }
}

function missingNumber(nums)
{
    // sort the array 
    nums.sort((a,b)=> a - b );
    if(nums.length <= 1)
    {
        return -1;
    }
    if(nums.length === 2)
    {
        if(nums[0]+1 === nums[1])
        {
            return nums[1]+1;
        }
        else
        {
            return nums[0] + 1
        }
    }
    // in case when n is the output
    if(nums[nums.length-1] != nums.length)
    {
        return nums.length;
    }
    console.log(nums.length)

    // rest can be solved using binary search
    return binarySearch(0, nums.length, nums)

}

console.log(missingNumber([0,2]));
console.log(missingNumber([2,1,0]))

console.log(missingNumber([0,1,2,4,5]))

