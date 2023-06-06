function XO(str) {
    let x = 0;
    let o = 0;
    let upper = str.toUpperCase();

    for (let i = 0; i < str.length; i++) {
        if (upper[i] === 'X') {
            x++;
        }
        if (upper[i] === 'O') {
            o++;
        }
    }
    if (x === o) {
        return true;
    } else {
        return false;
    }
}