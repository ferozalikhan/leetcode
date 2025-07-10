function frequencyCounter(str) {
    const bucket = new Array(26).fill(0)
    for (let i = 0; i < str.length; i++) {
        // bucket[nums[i]]++
        let idx = str[i].charCodeAt(0) - "a".charCodeAt(0)
        // console.log(idx);
        bucket[idx]++
    }
    return bucket["r".charCodeAt(0) - "a".charCodeAt(0)]
}

// console.log(frequencyCounter([1,2,3,4,3,2,2,7]))
console.log(frequencyCounter("amritvirsinghrandhawa"))