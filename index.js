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




//input string find parenthese pair index, return [n, n+1], if
const indexForCutFn = (str) => {
    let indexForCut = [];
 

    if(str.length <= 1) {
        indexForCut = ['error'] 
        console.log('indexForCut', indexForCut)
        return indexForCut
    }

    for(let i = 0; i < str.length; i++) {
            if(str[i] === '(') {
                if(str[i+1] === ')') {
                    indexForCut = [i, i+1];
                } else {
                    indexForCut = ['error'];
                }  
            }
            if(str[i] === '[') {
                if(str[i+1] === ']') {
                    indexForCut = [i, i+1];
                }   else {
                    indexForCut = ['error'];
                }  
            }
            if(str[i] === '{') {
                if(str[i+1] === '}') {
                    indexForCut = [i, i+1];
                }   else {
                    indexForCut = ['error'];
                }  
            }
    }

    
    console.log('indexForCut', indexForCut)
    return indexForCut;
}
// indexForCutFn("0")


// input string and indexForCutFn, return after cut string
const cutStrFn = (str, cut) => {
    const afterCut = `${str.slice(0,cut[0])}${str.slice(cut[1] + 1, str.length)}`;
    // console.log('afterCut', afterCut)// heo
    return afterCut;

}   
// cutStrFn('[()]', [1,2])
// cutStrFn("hello", [2,3])//

const isValid = (s) => {

    if(s.length <= 1) {
        console.log('false')
        return false;
    }
    let resultStr = s;
    let result = true;

    for(let i = 0; i < s.length; i++) {
       
        if(resultStr.length >= 0 && result) {
            let cutIndex = indexForCutFn(resultStr);
            if(cutIndex[0] === 'error') {
                result = false
            } else {
                resultStr = cutStrFn(resultStr,cutIndex);
                result = true;
            }
    
        } else {
            result = false;
        }
   
    }

    console.log(result);
    return result;

}





// isValid("()"); // true
// isValid("()[]{}"); // true
// isValid("(]"); //false
isValid(")]"); //false
// isValid("{[]}"); // true
// isValid("{[]}{()}"); // true

// const isValid = function (s) {
//     // create let result = true;
//     let result = true;
//     // if s.length === 1 return false 
//     if (s.length === 1) {
//         result = false;
//         console.log(result);
//         return result;
//     };
//     // if s.substring(0, 1) = ),],} return false
//     let headStr = s.substring(0, 1);
//     if (headStr === `)`) {
//         result = false;
//         console.log(result);
//         return result;
//     };
//     if (headStr === ']') {
//         result = false;
//         console.log(result);
//         return result;
//     };
//     if (headStr === '}') {
//         result = false;
//         console.log(result);
//         return result;
//     };

//     //define () {} []
//     const parenthese = {
//         round: { left: '(', right: ')' },
//         curly: { left: '{', right: '}' },
//         square: { left: '[', right: ']' }
//     }

//     // loop s.length  ,  become a string and b string
//     let switchBtn = true;
//     let a = [];
//     let b = [];
//     for (let i = 0; i < s.length; i++) {
//         if (switchBtn) {
//             a.push(s.substring(i, i + 1))
//             switchBtn = false;
//         } else {
//             b.push(s.substring(i, i + 1))
//             switchBtn = true;
//         }
//     }
//     // if a.length !== b.length return false
//     if (a.length !== b.length) {
//         result = false;
//         console.log(result);
//         return result;
//     }

//     // loop a.length  use substring to compare a and b string.   

//     for (let j = 0; j < a.length; j++) {
//         if (result) {
//             if (a[j] === parenthese.round.left) {
//                 if (b[j] === parenthese.round.right) {
//                     result = true;
//                 } else {
//                     result = false;
//                 }
//             }
//             if (a[j] === parenthese.curly.left) {
//                 if (b[j] === parenthese.curly.right) {
//                     result = true;
//                 } else {
//                     result = false;
//                 }
//             }
//             if (a[j] === parenthese.square.left) {
//                 if (b[j] === parenthese.square.right) {
//                     result = true;
//                 } else {
//                     result = false;
//                 }
//             }
//         } else {
//             result = false;
//         }



//     }

//     // if match result = true, other is result = false
//     // if false always false

//     // return result
//     console.log(result)
//     return result;
// };

// function isValid(s) {
//     const stack = [];
//     const pairs = {
//       ')': '(',
//       '}': '{',
//       ']': '[',
//     };
//     for (let i = 0; i < s.length; i++) {
//       if (s[i] === '(' || s[i] === '{' || s[i] === '[') {
//         stack.push(s[i]);
//       } else if (pairs[s[i]] && stack[stack.length - 1] === pairs[s[i]]) {
//         stack.pop();
//       } else {
//         console.log(false)
//         return false;
//       }
//     }

//     if(stack.length === 0) {
//         console.log(true)
//     }
//     return stack.length === 0;
//   }
  



// const pairs = {
//     ')': '(',
//     '}': '{',
//     ']': '[',
//   };

//   console.log(pairs[']'])
//test push