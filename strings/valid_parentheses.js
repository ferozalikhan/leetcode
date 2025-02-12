

function paranthesis(s){
    // use a stack to keep track of valid parentheses
    const valid_stack = [];

    for (let i = 0; i < s.length; i++) {
        if(s[i] === '(' || s[i] === '{' || s[i] === '[')
        {
            valid_stack.push(s[i]);
        }
        else
        {
            // if the stack is empty, then the string is invalid
            if(valid_stack.length === 0) return false;
            let last = valid_stack.pop();
            if(s[i] === ')' && last !== '(') return false;
            if(s[i] === '}' && last !== '{') return false;
            if(s[i] === ']' && last !== '[') return false;
        }
    }
    // if the stack is empty, then the string is valid
    if(valid_stack.length !== 0) return false; 
    return true; 
}

console.log(paranthesis("(]")); // false"));
console.log(paranthesis("()")); // true"));
console.log(paranthesis("()[]{}")); // true"));
console.log(paranthesis("(]")); // false"));
console.log(paranthesis("([)]")); // false"));
console.log(paranthesis("{[]}")); // true"));
console.log(paranthesis("")); // true"));
console.log(paranthesis("]")); // false"));


