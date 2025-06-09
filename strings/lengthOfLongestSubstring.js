function lengthOfLongestSubstring(s) {
    let maxSubStringLength = 0;
    for( let i =0; i < s.length; i ++)
    {
         let currentLength = 0;
        for(let j = i + 1; s.length; j++)
        {
            if(s[j] !== s[i])
            {
                currentLength ++;
            }
            else 
            {
                currentLength = 0;
            }
        }
        if(currentLength > maxSubStringLength )
        {
            maxSubStringLength = currentLength;
        }
    }
    return maxSubStringLength;
}

function lengthOfLongestSubstring(s) {
    let maxLength = 0;

    for (let i = 0; i < s.length; i++) {
        let seen = new Set();

        for (let j = i; j < s.length; j++) {
            if (seen.has(s[j])) {
                break;
            }

            seen.add(s[j]);
            maxLength = Math.max(maxLength, j - i + 1);
        }
    }

    return maxLength;
}
