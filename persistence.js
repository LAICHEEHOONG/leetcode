function persistence(num) {
    // if num < 10; return num
    let count = 0;
    if (num < 10) {
        console.log(count);
        return count;
    }

    let numMul = num;
    

    while (numMul > 9) {
        let str = numMul.toString().split('');
        let mul = parseInt(str[0]);
        for(let i = 1; i < str.length; i++) {
            mul = mul * parseInt(str[i]);
        }
        numMul = mul;
        count++;
    }

    console.log(count, numMul);
    return count;
}

// persistence(39);
// persistence(4);
persistence(25);
// persistence(999);

// 25 // 10 // 0