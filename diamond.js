function diamond(n) {

    if (n % 2 === 0 || n < 0) {
        console.log(null);
        return null
    }

    let star = [];

    for (let i = 1; i <= n; i++) {
        if (i % 2 !== 0) {
            star.push(numToStar(i, n));
        }
    }

    const sampleStar = star;
    for (let j = sampleStar.length - 2; j >= 0; j--) {
        star.push(sampleStar[j])
    }

    //  console.log(star.join(''))
    return star.join('');
}

function numToStar(starQty, n) {
    let star = '*';
    let space = ' ';
    let spaceQty = (n - starQty) / 2;
    let ans = star.repeat(starQty);

    ans = `${space.repeat(spaceQty)}${ans}\n`
    // console.log(ans)
    return ans;
}

diamond(5)

// numToStar(3, 5)