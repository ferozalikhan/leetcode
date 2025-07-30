function twoSums(nums, target)
{
    // brute force solution
    for (let index = 0; index < nums.length; index++) {
       for(let j = index+1; j < nums.length; j++ )
       {
         if(nums[index] + nums[j] === target)
            {
                return [index, j];
            } 
       }
    }
}

function twoSumsWithHash(nums, target)
{
    // solve using has map
    let valueMap = new Map();
    for(let i = 0; i < nums.length; i ++)
    {
        // calculate target value using nums[i] and check if leftover exist in map
        let leftOverValue = target - nums[i];
        // i and j must not be the same index
        if(valueMap.has(leftOverValue) && valueMap.get(leftOverValue) != i)
        {
            return [valueMap.get(leftOverValue), i];
        }
        else
        {
            valueMap.set(nums[i], i);
        }
    }
    return -1;
}

nums = [3,4,5,6], target = 7
// answer should be [0, 2] or [2, 0]

console.log(twoSums(nums, target)) 

nums2 = [4,5,6], target2 = 10
// answer should be [[6, 4]]
console.log(twoSums(nums2, target2))

console.log(twoSumsWithHash(nums, target))
console.log(twoSumsWithHash(nums2, target2))