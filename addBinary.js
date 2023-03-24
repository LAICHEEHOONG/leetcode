//67. Add Binary

const matchLength = (arr, l) => {
    if (arr.length >= l || !l) {
        console.log('matchLength function error');
        return;
    }

    let addZero = l - arr.length;

    for (let i = addZero - 1; i >= 0; i--) {
        arr = ['0', ...arr]
    }

    return arr;
}


const addBinary = (a, b) => {
    let aArray = a.split('');
    let bArray = b.split('');
    let cArray = [];
    let carry = 0;
    let loop = aArray.length >= bArray.length ? aArray.length : bArray.length;

    if (a.length > b.length) {
        bArray = matchLength(bArray, loop);
    } else if (b.length > a.length) {
        aArray = matchLength(aArray, loop);
    }

    aArray = aArray.map(Number);
    bArray = bArray.map(Number);

    for (let i = loop - 1; i >= 0; i--) {
        let sum = aArray[i] + bArray[i] + carry;
        if(sum === 0 || sum === 1) {
            cArray.push(sum);
            carry = 0;
        } else if(sum === 2) {
            cArray.push(0);
            carry = 1;
        } else if(sum === 3) {
            cArray.push(1);
            carry = 1;
        }
    }

    if(carry === 1) {
        cArray.push(1);
    }

    let result = cArray.reverse();
    result = result.map(String);
    result = result.join('');
    return result;
}
