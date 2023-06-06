function printerError(s) {
    let all = s.length;
    let bad = 0;
    let arrStr = s.split('')
    const pattern = /[a-m]/g;

    for(let i = 0; i < all; i++) {
        let matching = arrStr[i].match(pattern);
        if(matching === null) {
            bad++;
        }
    }

    let ans = `${bad}/${all}`;
    console.log(ans);
    return ans
    
}

printerError('aaaxbbbbyyhwawiwjjjwwm')

// const pattern = /[a-c]/g;
// const str = 'h';

// const matches = str.match(pattern);
// console.log(matches)
