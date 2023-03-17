// Given a string s containing just the characters '(', ')', '{', '}', '[' and ']', determine if the input string is valid.

// An input string is valid if:

// Open brackets must be closed by the same type of brackets.
// Open brackets must be closed in the correct order.
// Every close bracket has a corresponding open bracket of the same type.


// Example 1:

// Input: s = "()"
// Output: true
// Example 2:

// Input: s = "()[]{}"
// Output: true
// Example 3:

// Input: s = "(]"
// Output: false





function indexForCutFn (str) {
    let indexForCut = [];

    if(str.length === 0) {
        indexForCut = ['empty'];
        return indexForCut;
    }

    if (str.length === 1) {
        indexForCut = ['error']
        return indexForCut
    }

    for (let i = 0; i < str.length; i++) {
        if (str[i] === '(') {
            if (str[i + 1] === ')') {
                indexForCut = [i, i + 1];
            } else {
                indexForCut = ['error'];
            }
        }
        if (str[i] === '[') {
            if (str[i + 1] === ']') {
                indexForCut = [i, i + 1];
            } else {
                indexForCut = ['error'];
            }
        }
        if (str[i] === '{') {
            if (str[i + 1] === '}') {
                indexForCut = [i, i + 1];
            } else {
                indexForCut = ['error'];
            }
        }

    }

    if(indexForCut.length === 0) {
        indexForCut = ['error']
    }

    return indexForCut;
}
function cutStrFn(str, cut) {
    const afterCut = `${str.slice(0, cut[0])}${str.slice(cut[1] + 1, str.length)}`;
    return afterCut;
}
function isValid(s) {
    
    if (s.length <= 1) {
        // console.log('false')
        return false;
    }
    let resultStr = s;
    let result = true;

    for (let i = 0; i < s.length; i++) {
        if(result && resultStr.length > 0 ) {
            let indexCut = indexForCutFn(resultStr);
            if(indexCut[0] === 'error') {
                result = false;
                resultStr = cutStrFn(resultStr, indexCut)
            } else if(indexCut[0] === 'empty') {
                result = true;
                resultStr = cutStrFn(resultStr, indexCut);
            } else {
                result = true;
                resultStr = cutStrFn(resultStr, indexCut);
            }
     
        }
    }

    // console.log(result);
    return  result;

}




isValid("()"); // true
isValid("()[]{}"); // true
isValid("(]"); //false
isValid(")]"); //false
isValid("{[]}"); // true
isValid("{[]}{()}"); // true
isValid("{[]}{({)}"); // false
isValid("())[]{}"); // false

