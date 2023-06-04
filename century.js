function century(year) {
    // Finish this :)

    // year / 100
    let century = year / 100;

    // check decimal
    century % 1 === 0 ? null : century = parseInt(century) + 1;
    // ans
    console.log(century);
    return century;
}

