function isAnagram(str1, str2) {
    // Base case: check length
    if (str1.length !== str2.length) {
        return false;
    }

    // Create a frequency hash for str1
    let hashForStr1 = {};
    for (let index = 0; index < str1.length; index++) {
        if (hashForStr1[str1[index]] === undefined) {
            hashForStr1[str1[index]] = 1;
        } else {
            hashForStr1[str1[index]] += 1;
        }
    }

    // Check str2 against the hash
    for (let index = 0; index < str2.length; index++) {
        if (hashForStr1[str2[index]] === undefined) {
            return false;
        } else if (hashForStr1[str2[index]] > 0) {
            hashForStr1[str2[index]]--;
        } else {
            return false;
        }
    }

    // Verify all values in the hash are 0
    for (const key in hashForStr1) {
        if (hashForStr1[key] !== 0) {
            return false;
        }
    }

    return true;
}

// Example usage
const s = "racecar", t = "carrace";
console.log(isAnagram(s, t)); // Output: true
console.log(isAnagram(s, "hello")); // Output: false    

function groupAnagrams(strs) {
    let resultArray = [];
    for (let index = 0; index < strs.length; index++) {
        let flag = false;
        for (let a = 0; a < resultArray.length; a++) {
            flag = resultArray[a].includes(strs[index]);
        }
        if(!flag)
        {
            let subArray = [strs[index]];
            for (let j = index+1; j < strs.length; j++) {
                if(isAnagram(strs[index], strs[j]))
                {
                    subArray.push(strs[j]);
                }
            }
            resultArray.push(subArray);
        }
    }
    return resultArray;
}

function groupAnagrams2(strs) {
    const map = {};

    for (const str of strs) {
        const sorted = str.split('').sort().join('');
        map[sorted] = map[sorted] ?? [];
        map[sorted].push(str);
    }

    return Object.values(map);
}

const array = ["act","pots","tops","cat","stop","hat"];

console.log(groupAnagrams2(array));