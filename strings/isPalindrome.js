const isPalindrome = (str) => {

    // base case 
    const trimmedStr = str.trim();
    if (str.length === 0 || str.length === 1)
    {
        return true;
    }
    // check if the first and last characters are the same
    if (trimmedStr[0] !== trimmedStr[trimmedStr.length - 1])
    {
        return false;
    }
    // check the rest of the string
    return isPalindrome(trimmedStr.slice(1, trimmedStr.length - 1));
}

console.log(isPalindrome("")); 
console.log(isPalindrome("a"));  
console.log(isPalindrome("aa"));
console.log(isPalindrome("racecar")); // true
console.log(isPalindrome("hello")); // false
// A

