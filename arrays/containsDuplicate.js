
const containsDuplicate = (nums) => {
    // can use hash map 
    let hashMap = {};
    for (let i = 0; i < nums.length; i++) {
        if (hashMap[nums[i]] !== undefined) {
            return true;
        } else {
            hashMap[nums[i]] = 1;
        }
    }
    return false;
};