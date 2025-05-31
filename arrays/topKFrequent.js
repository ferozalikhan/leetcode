function topKFrequent(nums, k) {
    const freqMap = {};

    // Step 1: Count frequencies
    for (const num of nums) {
        freqMap[num] = (freqMap[num] || 0) + 1;
    }

    console.log(freqMap);
    // Step 2: Convert map to array of [num, frequency] pairs
    const freqArray = Object.entries(freqMap);
    console.log(freqArray);
    // Step 3: Sort by frequency descending
    freqArray.sort((a, b) => b[1] - a[1]);
    console.log(freqArray);

    // Step 4: Get the first k elements' keys
    const result = freqArray.slice(0, k).map(pair => Number(pair[0]));

    return result;
}


let nums = [1,2,2,3,3,3];
let k = 2;

let nums2 = [1,1,1,2,2,3];
k = 2;

let nums3 = [7,7];
k = 1;

// console.log(topKFrequent(nums3, k)); // Output: [7]


// console.log(topKFrequent(nums2, k)); // Output: [1, 2]

console.log(topKFrequent(nums, k)); 