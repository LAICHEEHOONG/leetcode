function accum(s) {
    //abcd => [a, b, c, d]
    const arr = s.split('');

    //[a, b, c,d] => [A, Bb, Ccc, Dddd]
    let add = [];

    for (let i = 0; i < arr.length; i++) {
        let str = arr[i].toUpperCase();
        for (let j = 0; j < i; j++) {
            str = `${str}${arr[i].toLowerCase()}`
        }
        add.push(str);
    }

    let ansArr = [];

    for(let z = 0; z < add.length; z++) {
        ansArr.push(add[z]);
        ansArr.push('-');
    }
    ansArr.pop();

    let ans = ansArr.join('');
    console.log(ans);
    return ans;


}
