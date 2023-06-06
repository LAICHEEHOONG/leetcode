const reverseSeq = n => {
    let arr = [];
    const length = n;
    for (let i = 0; i < length; i++) {
        if (n > 0) {
            arr.push(n);
            n--;
        }
    }
    console.log(arr);
    return arr;

};

reverseSeq(5)