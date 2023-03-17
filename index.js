function isValid(s) {

    if(s.length === 1) {
        console.log(false);
        return false;
    }

    let stack = [];

    for (let i = 0; i < s.length; i++) {
        let c = s.charAt(i);

        if (c == '(' || c == '{' || c == '[') {
            stack.push(c);
        } else if (c == ')' && stack.length > 0 && stack[stack.length - 1] == '(') {
            stack.pop();
        } else if (c == '}' && stack.length > 0 && stack[stack.length - 1] == '{') {
            stack.pop();
        } else if (c == ']' && stack.length > 0 && stack[stack.length - 1] == '[') {
            stack.pop();
        } else {
            console.log(false);
            return false;
        }
    }
    console.log(true)
    return true
}

isValid("[");// fase
isValid("()"); // true
isValid("()[]{}"); // true
isValid("(]"); //false
isValid(")]"); //false
isValid("{[]}"); // true
isValid("{[]}{()}"); // true
isValid("{[]}{({)}"); // false
isValid("())[]{}"); // false
