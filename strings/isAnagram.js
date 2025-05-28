
function isAnagram(s, l) {

 // if the length is differenct return false
 if (s.length != t.length )
    {
        return false;
    }
    // case: length is same 
    let reverseIndex = s.length -1;
    for (let index =0; index < s.length; index ++)
    {
        // if both index are same return true
        if(index === reverseIndex )
        {
            return true;
        }
        else if ( s[index] !== t[reverseIndex])
        {
            return false;
        }
    }

    return true;
}