function isPalindrome(num) {
    // using mod to check if a number is a palindrome
    if (num < 0) return false; // negative numbers are not palindromes
    let original = num;
    let reversed = 0;
    while (num > 0) {
        let digit = num % 10; // get the last digit
        reversed = reversed * 10 + digit; // append it to the reversed number
        num = Math.floor(num / 10); // remove the last digit from the original number
    }
    return original === reversed; // check if the original number is equal to the reversed number
}

// Example usage:
console.log(isPalindrome(121)); // Output: true
console.log(isPalindrome(-121)); // Output: false
console.log(isPalindrome(10)); // Output: false
console.log(isPalindrome(12321)); // Output: true