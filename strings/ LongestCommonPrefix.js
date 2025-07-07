function longestCommonPrefix(str)
{
    let commonPrefix = str[0];
    for (let i = 1; i < str.length; i ++)
    {
        let index = 0;
        let tmp = "";
        // if the first character does not match, return empty string
        if (str[i][0] !== commonPrefix[0])
        {
            return "";
        }
        while(str[i][index] === commonPrefix[index] && index < commonPrefix.length && index < str[i].length )
        {
            tmp += str[i][index];
            index++;
        }
        commonPrefix = tmp;
    }
    return commonPrefix;
}


// Example usage:
console.log(longestCommonPrefix(["flower", "flow", "flight"])); // Output: "fl"
console.log(longestCommonPrefix(["dog", "racecar", "car"])); // Output: ""
console.log(longestCommonPrefix(["a", "b", "c"])); // Output: ""
console.log(longestCommonPrefix(["apple", "app", "apricot"])); // Output: "ap"
console.log(longestCommonPrefix(["", "b", "c"]));