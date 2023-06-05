

function order(words) {
    const pattern = /[1-9]/;
    let sorted = words.split(' ').sort((a, b) => {

        a = a.match(pattern)
        a = parseInt(a[0]);

        b = b.match(pattern);
        b = parseInt(b[0]);

        return a - b;
    })

    return sorted.join(' ');
}

order("is2 Thi1s T4est 3a")