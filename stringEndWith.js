// Complete the solution so that it returns true if the first argument(string) passed in ends with the 2nd argument (also a string).

// Examples:

// solution('abc', 'bc') // returns true
// solution('abc', 'd') // returns false

function solution(str, ending){
    let obj = toArr(str, ending);
    let result = matching(obj.str, obj.ending);

    return result;
  }

 //str => [], ending => [] 
 function toArr(str, ending) {
    return {str: str.split(''), ending: ending.split('')}
 }

 // loop 
 function matching(str, ending) {
    let s = str.reverse();
    let e = ending.reverse();
    let bool = true;
    
    for(let i = 0; i < e.length; i++) {
        if(bool) {
            if(s[i] === e[i]) {
                bool = true;
            } else {
                bool = false;
            }
        }
    }

    console.log(bool);
    return bool;
 }

 solution('abc', 'bc') // returns true
 solution('abc', 'd') // returns false