function reverseNumber(num) {
    // solved using mod
    let reversed = 0;
    let isNegative = num < 0;
    num = Math.abs(num);
    while (num > 0) {
        let digit = num % 10; // get the last digit
        reversed = reversed * 10 + digit; // append it to the reversed number
        num = Math.floor(num / 10); // remove the last digit from the original number
    }
    return isNegative ? -reversed : reversed; // return the reversed number with the original sign
}

// Example usage:
console.log(reverseNumber(12345)); // Output: 54321
console.log(reverseNumber(-12345)); // Output: -54321
console.log(reverseNumber(0)); // Output: 0