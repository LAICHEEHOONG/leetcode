//12. Integer to Roman

// create funtion roman1
// roman1  Number convert to IIII, VIIII,XXXX, LXXXX

// create funtion roman2
// IIII=> IV, VIIII=> IX, XXXX, LXXXX
// IIII = 4 ,VIIII = 9, 40 = XXXX, 90 = LXXXX, 400 = CCCC, 900 = DCCCC


const symbol = {
    M: 1000,
    D: 500,
    C: 100,
    L: 50,
    X: 10,
    V: 5,
    I: 1
};

// ['I','I',I','I'] => IV 
// obj = {arr, num}
const romanReduce = (obj) => {
    let biger;
    let small;
    let smaller = [];
    let {arr, num} = obj;
    let result;

    for (let romanNum in symbol) { //romanNum: I, symbol[romanNum]: 1
        if(num > symbol[romanNum]) {
            biger = biger;
        } else {
            biger = romanNum;
        }
    }

    for(let romanNum in symbol) {
        if(symbol[biger] > symbol[romanNum]) {
            smaller.push(romanNum);
        }
    }

    // console.log(`biger: ${biger}`);
    // console.log(`smaller: ${smaller}`);

    smaller.forEach(roman => {
        let cal = num - (symbol[biger] - symbol[roman]);
        // console.log(cal)
        if(cal === 0) {
            small = roman;
        }
    })

    // console.log(`Small: ${small}`);

    result = `${small}${biger}`;
    // console.log(result);
    return result;
    

}
// romanReduce({arr:['I','I','I','I'], num:4})


//  ['I','I',I','I'] find 4 repeat
const filterRoman = (obj) => {
    let arr = obj.arr;
    let result = [];
    let ans;
    
    for(let i = 0; i < arr.length; i++) {
        if(result.length === 0) {
            result.push(arr[i]);
        } else {
            if(result[0] === arr[i]) {
                result.push(arr[i]);
            } else {
                result = [arr[i]]
            }
        }
    }

    if(result.length === 4) {
        // console.log(`active covert ${arr}`)
        // console.log(obj)
        return romanReduce(obj)

        // return romanReduce(obj);
        // return obj
    } else {
        // console.log(`no need covert ${arr}`)
        ans = arr.join('');
        // console.log(`Ans: ${ans}`);
        // console.log(ans)
        return ans;
    }
  
}

// 3000 => ['M','M','M']; 4 => ['I','I','I','I']
const nToR = (num) => {
    let result = [];
    let carry = num;
    let run = true;

    while (carry !== 0) {
        run = true;
        for (let romanNum in symbol) { //romanNum: I, symbol[romanNum]: 1
            if (carry >= symbol[romanNum] && carry !== 0 && run) {
                result.push(romanNum);
                carry = carry - symbol[romanNum]
                run = false;
            }
        }
    }

    // console.log(result);
    return {
        arr: result,
        num: num
    };
}


// ('3', 3) => 3000
const strAddZero = (str, zero) => {
    let arr = [str];

    for (let i = 0; i < zero; i++) {
        arr.push('0')
    }
    return Number(arr.join(''));
}

// 3999 => [3000, 900, 90, 9]
const numToStrArr = (num) => {
    let str = num.toString();
    let arr = [];
    let strLength = str.length - 1;

    for (let i = 0; i < str.length; i++) {
        // arr.push(str[i]);
        let strToNum = strAddZero(str[i], strLength)
        arr.push(strToNum);
        strLength--;
    }

    return arr;
};

// [3000, 900, 90, 9] => ['MMM', 'CM', 'XC', 'IX'];
const numToRoman = (arr) => {
    let result = [];

    arr.forEach(num => {
        let r = filterRoman(nToR(num));
        result.push(r);
    })

    return result;


}

// ['MMM', 'CM', 'XC', 'IX'] => 'MMMCMXCIX' 
const intToRoman = (num) => {
    let numArr = numToStrArr(num);
    let romanArr = numToRoman(numArr);
    let result = romanArr.join('');

    console.log(result);
    return result;
    
}

intToRoman(4);
intToRoman(9);
intToRoman(40);
intToRoman(90);
intToRoman(400);
intToRoman(900);
intToRoman(3999);