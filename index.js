// * 'abc' =>  ['ab', 'c_']
// * 'abcdef' => ['ab', 'cd', 'ef']

function solution(str){
   let becomeArr = strToArray(str);
   let twinArr = twoArr(becomeArr);
   let ans = compileArr(twinArr[0], twinArr[1]);

   return ans;
}

// 'abc' => ['a', 'b', 'c']
function strToArray(str) {
  let arr = str.split('');
  console.log(arr);
  return arr;
}

// ['a', 'b', 'c'] => ['a', 'c'] & ['b']
function twoArr(arr) {
  let carry = true;
  let arr1 = [];
  let arr2 = [];
  for(let i = 0; i < arr.length; i++) {
    if(carry) {
      arr1.push(arr[i]);
      carry = false;
    } else {
      arr2.push(arr[i]);
      carry = true;
    }
  }

  let result = [arr1, arr2];
  console.log(result);
  return result;
}

// ['a', 'c'] & ['b'] => ['ab', 'c']
function compileArr(arr1, arr2) {

  let result = [];

  const toResult = (a, b) => {
    for(let i = 0; i < a.length; i++) {
      let A = a[i];
      let B = b[i];
      if(!A) {
        A = '_';
      }
      if(!B) {
        B = '_';
      }
      result.push(`${A}${B}`);
    }
    
  }
  
  toResult(arr1, arr2);

  console.log(result);
  return result;


}



