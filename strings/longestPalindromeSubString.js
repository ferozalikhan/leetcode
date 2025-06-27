function longestPalindroe(s)
{
    // brute force
    let subString = "";
    let maxLength = 0;
    for(let i =0; i < s.length - 1; i ++)
    {
        for(let j = s.length-1; j > i; j --)
        {
                let tmpI = i;
                let tmpJ = j;
                let flag = true;
                while(tmpI <= tmpJ)
                {
                    if(s[tmpI] != s[tmpJ])
                    {
                        flag = false;
                        break;
                    }
                    
                    tmpI++;
                    tmpJ--;
                }
                if(flag)
                {
                    if(j - i + 1 > maxLength)
                    {
                        maxLength = j - i + 1;
                        subString = s.substring(i, j + 1);
                    }
                }
        }

    }
    return subString || s[0]; // if no palindrome found, return the first character
    // Time Complexity: O(n^3) in the worst case, O(n^2) in the average case
    // Space Complexity: O(1) since we are not using any extra space that grows with input size
}

// test cases
console.log(longestPalindroe("babad")); // Output: "bab" 

console.log(longestPalindroe("aacabdkacaa")); // Output: "aa" or "bb" or "cc"