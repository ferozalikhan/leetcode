function insertionSort(nums)
{
    for(let i = 1; i < nums.length; i ++)
    {
        for(let j = i; j > 0; j --)
        {
            if(nums[j] < nums[j-1])
            {
                let tmp = nums[j];
                nums[j] = nums[j -1];
                nums[j -1] = tmp;
            }
        }
    }
    return nums;
}

console.log(insertionSort([2,5,9,3,7,4,11,13]))
// Output: [2, 3, 4, 5, 7, 9, 11, 13]
// Explanation: The insertion sort algorithm sorts the array in ascending order by repeatedly taking an element from
// the unsorted part and inserting it into the correct position in the sorted part of the array
// Time Complexity: O(n^2) in the worst case, O(n) in the



// more test cases
console.log(insertionSort([5, 2, 9, 1, 5, 6])); // Output: [1, 2, 5, 5, 6, 9]
console.log(insertionSort([3, 0, 2, 5, -1, 4, 1])); // Output: [-1, 0, 1, 2, 3, 4, 5]