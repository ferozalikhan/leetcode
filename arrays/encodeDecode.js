function encode(str)
{
    // encode using a special patthern to return a single stirng
    let encodedStr = ""
    let delimiter = "#"
    for (let index = 0; index < str.length; index++) {
        let stringLen = str[index].length;
        encodedStr += stringLen + delimiter + str[index];
    }
    return encodedStr;
    
}

    function decode(str) {
        let res = [];
        let i = 0;
    
        while (i < str.length) {
            let j = i;
            // Step 1: Find the delimiter "#"
            while (str[j] !== "#") {
                j++;
            }
    
            // Step 2: Extract the length (from i to j)
            const length = parseInt(str.slice(i, j));
    
            // Step 3: Extract the string of that length after "#"
            const word = str.slice(j + 1, j + 1 + length);
            res.push(word);
    
            // Step 4: Move `i` to the start of the next encoded word
            i = j + 1 + length;
        }
    
        return res;
    }
    



const array = ["we","say",":","yes","!@#$%^&*()"]
console.log(encode(array))
const encodedString = encode(array);
console.log(decode(encodedString))
