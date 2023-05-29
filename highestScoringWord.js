//Highest Scoring Word

function high(x) {
    const xArr = toArr(x);
    const lengthArr = lenghtArr(xArr);
    const largestIndex = highesScore(lengthArr);
    const ans = highesScoreString(xArr, largestIndex);
    console.log(ans);
    return ans;
  }
  
  // string to array => []
  function toArr(x) {
    let arr = x.toLowerCase().split(' ');
    // console.log(arr)
    return arr;
  }
  
  // loop x and get a lenght array
  function lenghtArr(x) {
    let arr = [];
    let abc = [0, 'a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n',
      'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z']
    x.forEach(el => {
      let sum = 0;
      let numArr = el.split('');
      for(let i = 0; i < numArr.length; i++) {
        for(let j = 0; j < abc.length; j++) {
            if(numArr[i] === abc[j]) {
              sum = sum + abc.indexOf(abc[j]);
              continue;
            }
        }
        
      }
      arr.push(sum);
      // arr.push(element.length)
    });
    // console.log(arr)
    return arr;
  }
  
  // find in array highest scoring number index
  function highesScore(x) {
    let largestIndex = Math.max(...x);
    return x.indexOf(largestIndex);
  }
  
  // use hisghesScore index in length array return the result
  function highesScoreString(toArr, highesIndex) {
    return toArr[highesIndex];
  }
  
  high('aaa b')
  // lenghtArr(['aaa', 'b'])
  // toArr('AbC sss')