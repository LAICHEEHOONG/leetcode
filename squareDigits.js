function squareDigits(num) {
    let arr = num.toString().split('').map(str => parseInt(str));
    let squareArr = [];
    for (let i = 0; i < arr.length; i++) {
        squareArr.push(arr[i]*arr[i])
    }
    let digit = squareArr.map(number => number.toString());
    digit = parseInt(digit.join(''))
    console.log(digit);
    return digit;
}

squareDigits(3212)