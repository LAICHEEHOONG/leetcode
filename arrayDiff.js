function arrayDiff(a, b) {
    let A = a;

    const filterFn = (arr, x) => {
        return arr.filter(el => el !== x);
    }

    for (let i = 0; i < b.length; i++) {
        A = filterFn(A, b[i]);
    }

    console.log(A);
    return A;

}






arrayDiff([1, 2, 2, 2, 3], [2])
