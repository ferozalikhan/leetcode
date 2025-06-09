function twoSum(numbers, target) {
        for (let i = 0; i < numbers.length; i++) {
            for (let j = i + 1; j < numbers.length; j++) {
                if (numbers[i] + numbers[j] === target) {
                    return [numbers[i], number[j]];
                }
            }
        }
        return [];
}

function twoSumOptimal(numbers, target)
{
    // base case check if numbers [0] + numbers[length-1] < target return false
    let arrayLength = numbers.length;
    if(arrayLength > 1)
    {
        if(numbers[arrayLength - 2 ] + numbers[arrayLength - 1] < target)
        {
            return [];
        }
    }
    // two pointer, one at start and one at end, do the following 
    let left = 0;
    let right = arrayLength - 1;
    while(left < right)
    {
        let sum = numbers[left] + numbers[right];
        if(sum === target)
        {
            return [left + 1, right + 1]; // +1 to convert to 1-based index
        }
        else if(sum < target)
        {
            left++;
        }
        else
        {
            right--;
        }
    }
    return [];

}

let numbers = [1,2,3,4];
let target = 3;



console.log(twoSumOptimal(numbers, target)); // [0, 1] or [1, 0]