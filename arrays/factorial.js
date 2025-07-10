// function reverseArray(nums, i, j)
// {
//     if(i === j )
//     {
//         return nums;
//     }
//     // swap i and j 
//     let tmp = nums[i];
//     nums[i] = nums[j];
//     nums[j] = tmp;

//     return reverseArray(nums, i + 1, j -1);
// }

let i = 0;
function reverseNumber(arr) {
    if (arr[i] === arr[arr.length - 1 - i]) return arr;
    [arr[i], arr[arr.length - 1 - i]] = [arr[arr.length - 1 - i], arr[i]];
    i++;
    return reverseNumber(arr);

}


// Example usage:
// let arr = [1, 2, 3, 4, 5];
let arr = [5,4,3,2,1];
console.log(reverseNumber(arr)); // Output: [