// 7. Reverse Integer

const reverse = (x) => {
    let max32bit = 2 ** 31 - 1;
    let min32bit = -(2 ** 31);
    let multi;
    let arr;

    if (x < 0) {
        multi = -1;
        x = -1 * x;
    } else {
        multi = 1;
    }

    x = x.toString();
    arr = x.split('');
    arr = arr.reverse();
    x = arr.join('');
    x = Number(x) * multi;
 
    if (x > max32bit || x < min32bit) return 0;

    return x;
}


  

reverse(123);//321
reverse(-123);//-321
reverse(120);//21
reverse(1534236469); // 0
reverse(-1563847412); //0
reverse(-2147483412); //-2143847412




