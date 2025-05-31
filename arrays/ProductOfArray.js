function productExceptSelf2(nums) 
{
    let results = [];
    for (let index = 0; index < nums.length; index++) {
        let sum = 1;
        // dont include the index[i]
        // reverse 
        if(index != 0)
        {
            for(let i = index -1; i >= 0; i --)
            {
                sum *= nums[i];
            }
        }

        // forward
        if(index +1 < nums.length)
        {
            for(let i = index +1; i < nums.length; i ++)
                {
                    sum *= nums[i];
                }
        }

        results.push(sum);
        
    }
    return results;
}

function productExceptSelf(nums) {
    let output = [];
    for (let i = 0; i < nums.length; i++) {
        let product = 1;
        for (let j = 0; j < nums.length; j++) {
            if (i === j) continue;
            else {
                product *= nums[j] ;
            }
        }
        output.push(product === -0 ? 0 : product);
    }
    return output;
}

let nums = [-1,0,1,2,3];
console.log(productExceptSelf(nums))