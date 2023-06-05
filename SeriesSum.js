function SeriesSum(n) {

    if(n === 0) {
        let x = 0;
        return x.toFixed(2);
    }

    let arr = [1];
    let carry = 4;
    if (n > 1) {
        for (let i = 1; i < n; i++) {
            arr.push(1 / carry);
            carry += 3;
        }
    }

    // console.log(arr);

    let sum = 0;

    for(let j = 0; j < arr.length; j++) {
        sum += arr[j];
    }

    let ans = sum.toFixed(2)
    console.log(ans);

    return ans;

}

SeriesSum(1)