function searchInsert(nums, target)
{
    let start = 0; 
    let end = nums.length -1;
    let mid = Math.floor ((end - start )/ 2);
    while(start <= end)
    {
        if(nums[mid] === target)
        {
            return mid; // If target is found, return the index

        }
        else if ( nums[mid] < target)
        {
            start = mid + 1;
            mid = Math.floor((end - start) / 2) + start; // Update mid based on new start
        }
        else
        {
            end = mid - 1;
            mid = Math.floor((end - start) / 2) + start; // Update mid based on new end
        }
    }
    return mid + 1; // If target is not found, return the index where it can be inserted
}

// Test cases
console.log(searchInsert([1,3,5,6], 5)); // Output: 2
console.log(searchInsert([1,3,5,6], 2)); // Output: 1
console.log(searchInsert([1,3,5,6], 7)); // Output: 4
