function pow(base, exponent) {
  if (exponent === 0) {
    return 1;
  }
  if (exponent < 0) {
    return 1 / pow(base, -exponent);
  }
  let result = 1;
  for (let i = 0; i < exponent; i++) {
    result *= base;
  }
  return result;
}
function binaryPow(x, n)
{
    // Handle negative exponent
    let isNegative = n < 0;
    let binaryValue = n.toString(2);
    let result = 1;
    for (let i = 0; i < binaryValue.length; i++) {
        if (binaryValue[i] === '1') {
            result *= x;
        }
        x *= x; // Square the base for the next bit
    }
    return  isNegative ? 1 / result : result;
}

// test cases for binaryPow
console.log(binaryPow(2, 3)); // Output: 8
console.log(binaryPow(5, 0)); // Output: 1
console.log(binaryPow(3, -2)); // Output: 0.111111111

// Test cases
console.log(pow(2, 3)); // Output: 8
console.log(pow(5, 0)); // Output: 1
console.log(pow(3, -2)); // Output: 0.111111111111