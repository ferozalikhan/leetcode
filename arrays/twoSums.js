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
    // using hash map to store {value, key}
    for (let index = 0; index < array.length; index++) {
        const element = array[index];
        
    }
}

nums = [3,4,5,6], target = 7

console.log(twoSums(nums, target)) 

nums2 = [4,5,6], target2 = 10
console.log(twoSums(nums2, target2))
