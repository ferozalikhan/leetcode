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

nums = [3,4,5,6], target = 7

console.log(twoSums(nums, target)) 