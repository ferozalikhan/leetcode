// using one for loop
function countMaximunConsecutive(array)
{
    let maxCount = -Infinity;
    let currCount = -Infinity;
    for (let index = 0; index < array.length; index++) {
        // if index is 1 incremtn currCount
        if(array[index] === 1)
        {
            currCount = currCount === -Infinity ? 1 : currCount + 1;
        }
        // else compare maxCount with currCount and pick the maximun
        else
        {
            maxCount = Math.max(currCount, maxCount);
            currCount = 0;
        }
    }
    return maxCount;
}

// Example usage:
let array = [1, 1, 1, 1, 0, 1, 1, 1, 0, 1, 1];
let result = countMaximunConsecutive(array);
console.log(result); // Output: 4

let array2 = [0, 0, 0, 1, 1, 1, 1, 0, 1];
let result2 = countMaximunConsecutive(array2);
console.log(result2); // Output: 4


