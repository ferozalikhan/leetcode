// function searchRange(nums, target)
// {
//     // use binary search
//     let mid = Math.floor(nums.length -1 / 2);
//     let startIndex = -1;
//     let endIndex = -1;
//     if(nums[mid] === target)
//     {
//         startIndex = mid;
//         endIndex = mid;
//         // check left side
//         for(let i = mid - 1; i >= 0; i --)
//         {
//             if(nums[i] === target)
//             {
//                 startIndex = i;
//             }
//             else
//             {
//                 break;
//             }
//         }
//         // check right side
//         for(let i = mid + 1; i < nums.length; i ++)
//         {
//             if(nums[i] === target)
//             {
//                 endIndex = i;
//             }
//             else
//             {
//                 break;
//             }
//         }
//         return [startIndex, endIndex];
//     }

//     else if(target > nums[mid])
//     {
//         for(let i = mid; i < nums.length; i ++)
//         {
//             if(nums[i] === target )
//             {
//                 if(startIndex === -1)
//                 {
//                     startIndex = i;
//                 }
//                 else
//                 {
//                     endIndex = i;
//                 }
//             }
//         }

//     }
//     else
//     {
//         for(let i = 0; i < mid; i ++)
//                 {
//                     if(nums[i] === target )
//                     {
//                         if(startIndex === -1)
//                         {
//                             startIndex = i;
//                             endIndex = i;
//                         }
//                         else
//                         {
//                             endIndex = i;
//                         }
//                     }
//                 }
//             }
//     return [startIndex, endIndex];
// }

function searchRange(nums, target) {
    // use binary search
    let start = 0;
    let end = nums.length - 1;
    let startIndex = -1;
    let endIndex = -1;
    while(start <= end)
    {
        let mid = Math.floor((start + end) / 2);

        if(nums[mid]=== target)
        {
            startIndex = mid;
            endIndex = mid;

            // check left side
            for(let i = mid - 1; i >= 0; i--) {
                if(nums[i] === target) {
                    startIndex = i;
                } else {
                    break;
                }
            }

            // check right side
            for(let i = mid + 1; i < nums.length; i++) {
                if(nums[i] === target) {
                    endIndex = i;
                } else {
                    break;
                }
            }
            return [startIndex, endIndex];

        }
        if(nums[mid] < target) {
            start = mid + 1;
        } else {
            end = mid - 1;
        }
    }
    return [-1, -1]; // target not found
}

// test cases
console.log(searchRange([5,7,7,8,8,10], 8)); // Output: [3, 4]
console.log(searchRange([5,7,7,8,8,10], 6)); // Output: [-1, -1]
console.log(searchRange([5,7,7,8,8,10], 10)); // Output: [5, 5] 
console.log(searchRange([1,2,3,4,5,6,7,8,9], 1)); // Output: [0, 0]