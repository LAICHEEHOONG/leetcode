// 66. Plus One

const plusOne = (digits) => {

    let lastDigit = digits[digits.length - 1];
    if (lastDigit !== 9) {
        let sum = lastDigit + 1;
        digits[digits.length - 1] = sum;
        return digits;
    }

    let result = [];
    let carry = 1;

    for (let i = digits.length - 1; i >= 0; i--) {
        let sum = carry + digits[i];
        if (sum === 10 && i > 0) {
            result.push(0);
            carry = 1;
        }
        if (sum < 10) {
            result.push(sum);
            carry = 0;
        }
        if (sum === 10 && i === 0) {
            result.push(0);
            result.push(1);
            carry = 0;
        }

    
    }
    result = result.reverse();
    return result;
}


plusOne([1,2,3]);//[1,2,4]
plusOne([4,3,2,1]);//[4,3,2,2]
plusOne([9]);//[1,0]
plusOne([9,9]);//[1,0,0]
plusOne([6, 1, 4, 5, 3, 9, 0, 1, 9, 5, 1, 8, 6, 7, 0, 5, 5, 4, 9]);//[6,1,4,5,3,9,0,1,9,5,1,8,6,7,0,5,5,5,0]
