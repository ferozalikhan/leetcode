function isPalidrome (s)
{
    // filter all special chars
    let filteredString = s.replace(/\W/g, '').toLowerCase();
    console.log(filteredString);
    for (let i = 0; i < filteredString.length / 2; i++) {
        if (filteredString[i] !== filteredString[filteredString.length - 1 - i]) {
            return false;
        }
    }
    return true;
};

const s = "Was it a car or a cat I saw?"

console.log(isPalidrome(s));