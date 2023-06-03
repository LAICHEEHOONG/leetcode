function lovefunc(flower1, flower2) {
    let f1 = oddEven(flower1);
    let f2 = oddEven(flower2);

    if (f1 === 'even' && f2 === 'odd') {
        return true;
    } else if (f1 === 'odd' && f2 === 'even') {
        return true;
    } else {
        return false;
    }

}

function oddEven(flower) {
    if (flower % 2 === 0) {
        return 'even';
    } else {
        return 'odd';
    }
}