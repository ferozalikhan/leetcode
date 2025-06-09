function threeSum(nums)
{
    // brute force
    // track i, j, k as indexes that start at i = 0, j = i +1, k = j +1, to make it distint triplets
    // if at i j k === 0 add it to results array
    let result = [];
    if(nums.length < 3) return [];
    for(let i = 0; i < nums.length; i ++)
    {
        for(let j = i + 1; j < nums.length; j ++)
        {
            for(let k = j + 1; k < nums.length; k ++)
            {
                 let sum = nums[i] + nums[j] + nums[k];
                 if(sum === 0)
                 {
                    let triplet = [nums[i], nums[j], nums[k]];
                    // sort triplet to avoid duplicates
                    triplet.sort((a, b) => a - b);
                    // check if triplet already exists in result
                    if(!result.some(r => r[0] === triplet[0] && r[1] === triplet[1] && r[2] === triplet[2]))
                        result.push(triplet);
                 }
            }
        }
    }
    return result;
}

function threeSumOptimal(nums) {
    if (nums.length < 3) return [];
  
    nums.sort((a, b) => a - b);
    let result = [];
  
    for (let i = 0; i < nums.length - 2; i++) {
      if (i > 0 && nums[i] === nums[i - 1]) continue;
  
      let j = i + 1;
      let k = nums.length - 1;
  
      while (j < k) {
        const sum = nums[i] + nums[j] + nums[k];
  
        if (sum === 0) {
          result.push([nums[i], nums[j], nums[k]]);
  
          // Skip duplicates for j and k
          while (nums[j] === nums[j + 1]) j++;
          while (nums[k] === nums[k - 1]) k--;
  
          j++;
          k--;
        } else if (sum < 0) {
          j++;
        } else {
          k--;
        }
      }
    }
  
    return result;
  }
  

let nums = [-1,0,1,2,-1,-4];

console.log(threeSum(nums));
console.log(threeSumOptimal(nums));