const pattern = /[A-Z]/;
const myName = 'laiaH'


// complete the function
function solution(string) {
    const pattern = /[A-Z]/;
    let camelIndex = [];
    let arrStr = string.split('');
    let result = [];

    for (let i = 0; i < arrStr.length; i++) {
        let matching = arrStr[i].match(pattern);
        if (matching) {
            camelIndex.push(i)
        }
    }

    for (let j = 0; j < arrStr.length; j++) {
        let str = arrStr[j];
        for (let k = 0; k < camelIndex.length; k++) {
            if(camelIndex[k] === j && j !== 0) {
                result.push(' ');
            }
        }
        result.push(str);
    }
    console.log(result.join(''))
    return result.join('')
  
}

// // complete the function
// function solution(string) {
//     const pattern = /[A-Z]/g;

//     let camel = string.replace(pattern, match => {
//         let space = `${' '}${match}`;
//         return space;
//     })

//     console.log(camel);
//     return camel;
// }

solution("findNumberNounsLeave");

