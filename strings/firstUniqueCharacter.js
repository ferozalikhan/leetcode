function firstUniqueCharacter(s) {
    const charCount = {};
    for (let i = 0; i < s.length; i++) {
        charCount[s[i]] = (charCount[s[i]] || 0) + 1;
    }
    for (let i = 0; i < s.length; i++) {
        if (charCount[s[i]] === 1) {
            return i;
        }
    }
    return -1;
}

// Example usage:
console.log(firstUniqueCharacter("leetcode")); // Output: 0
console.log(firstUniqueCharacter("loveleetcode")); // Output: 2
console.log(firstUniqueCharacter("aabb")); // Output: -1
console.log(firstUniqueCharacter("")); // Output: -1
console.log(firstUniqueCharacter("a")); // Output: 0