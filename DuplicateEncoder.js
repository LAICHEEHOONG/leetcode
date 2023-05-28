// The goal of this exercise is to convert a string to a new string where each character in the new string is "(" if that character appears only once in the original string, or ")" if that character appears more than once in the original string. Ignore capitalization when determining if a character is a duplicate.

// Examples
// "din"      =>  "((("
// "recede"   =>  "()()()"
// "Success"  =>  ")())())"
// "(( @"     =>  "))((" 


function duplicateEncode(word) {
    let upper = toUppercase(word);
    let upperArr = upper.split('');
    let dup = findDuplicate(upper);
    // console.log(upperArr, dup)
    let ans = convert(upperArr, dup);
    return ans;
  }
  
  // to uppercase
  function toUppercase(word) {
    let upper = word.toUpperCase();
    // console.log(upper);
    return upper;
  }
  
  // find duplicate
  function findDuplicate(word) {
    let arr = word.split('');
    let duplicateArr = arr.filter((el, index) => arr.indexOf(el) !== index);
    return duplicateArr;
  }
  
  // convert to ()
  function convert(upperArr, dup) {
    let result = [];
   
    for(let i = 0; i < upperArr.length; i++) {
      let carry = true;
      for(let j = 0; j < dup.length; j++) {
        if(carry) {
          if(upperArr[i] === dup[j]) {
            carry = false;
          }
        }
      }
      if(carry) {
        result.push('(')
      } else {
        result.push(')')
      }
    }
  
    result = result.join('')
    console.log(result);
    return result;
  }
  
  
  duplicateEncode('din')
  duplicateEncode('recede')
  duplicateEncode('Success')
  duplicateEncode('(( @')