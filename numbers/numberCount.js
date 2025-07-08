function numberCount(num)
{
    // Count the number of digits in a number
    // using mod to count the digits
    if (num === 0) return 1; // special case for 0
    let count = 0;
    let isNegative = num < 0; // check if the number is negative
    num = Math.abs(num); // work with the absolute value of the number
    while (num > 0) {
        num = Math.floor(num / 10); // remove the last digit
        count++; // increment the count
    }
    return isNegative ? count + 1 : count; // if negative, add 1
}

// Example usage:
console.log(numberCount(12345)); // Output: 5
console.log(numberCount(-12345)); // Output: 6
console.log(numberCount(0)); // Output: 1
console.log(numberCount(100)); // Output: 3