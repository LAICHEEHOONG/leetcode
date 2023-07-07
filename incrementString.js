function incrementString(strng) {
    let arr = strng.split('');
    let foundNum = false;
    let ans = false;
    for (let el of arr) {
        if (parseInt(el) || el === '0') {
            foundNum = true;
        }
    }

    if (!foundNum) {
        ans = `${strng}1`;
        console.log(ans);
        return ans;
    }

    const preAns = sparete(strng);
    const secondStr = sum(preAns[1]);
    ans = `${preAns[0].join('')}${secondStr}`;
    console.log(ans);
    return ans;
}

//fo99obar99 -> fo99obar, 99

function sparete(str) {
    let left = [];
    let right = [];
    let run = true;
    let arrayRe = str.split('').reverse();

    for (let i = 0; i < arrayRe.length; i++) {
        // console.log(el)
        if (run && parseInt(arrayRe[i]) || arrayRe[i] === '0') {
            right.push(arrayRe[i]);
        }
        if (!parseInt(arrayRe[i]) && arrayRe[i] !== '0') {
            run = false;
        }
        if (!run) {
            left.push(arrayRe[i]);
        }
    }

    left = left.reverse();
    right = right.reverse();
    // console.log('right', right);
    // console.log('left', left);
    return [left, right];
}

// 000 -> 001
function sum(arr) {
    let str1 = arr;
    let str2 = (parseInt(arr.join('')) + 1).toString().split('');
    let length = str1.length - str2.length;

    for (let i = 0; i < length; i++) {
        str2 = ['0', ...str2];
    }
    let result = str2.join('');
    // console.log(result);
    return result;
}


// sparete('fo99obar99')
incrementString('fo99obar99')