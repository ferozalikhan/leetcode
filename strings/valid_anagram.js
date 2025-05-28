var isAnagram = function(s, t) {
    // a hash table to store s with k = char , v = count
    let chars_map = {};

    for (let i = 0; i < s.length; i++) {
        if(chars_map[s[i]] === undefined )
        {
            chars_map[s[i]] = 1;
        }
        else
        {
            let curr_count = chars_map[s[i]];
            chars_map[s[i]] = curr_count + 1;
        }
    }
    
    // now iterate through t and manage the count

    for (let j = 0; j < t.length; j++)
    {
        if(chars_map[t[j]] === undefined)
        {
            return false;
        }
        else
        {
            let curr_count = chars_map[t[j]];
            chars_map[t[j]] = curr_count - 1;
        }
    }
    
    // check if all values are 0
    for (const [key, value] of Object.entries(chars_map)) {
        if(value !== 0) return false;
    }

    return true;
    
};

console.log(isAnagram("FerozaliKhan", "KhanFerozali")); // true

