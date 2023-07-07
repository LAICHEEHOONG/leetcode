// 1 2 3
// 4 5 6
// 7 8 9
//   0

const buttons = {
    '1': ['1', '2', '4'],
    '2': ['1', '2', '3', '5'],
    '3': ['2', '3', '6'],
    '4': ['1', '4', '5', '7'],
    '5': ['2', '4', '5', '6', '8'],
    '6': ['3', '5', '6', '9'],
    '7': ['4', '7', '8'],
    '8': ['0', '5', '7', '8', '9'],
    '9': ['6', '8', '9'],
    '0': ['0', '8']
};

function getPINs(str) {
    const bigArr = str.split('').map(str => buttons[str]);
    const result = [];

    function loop(pin, count) {
        if(pin.length === str.length) {
            result.push(pin);
        }
        if(bigArr[count]) {
            for(let i = 0; i < bigArr[count].length; i++) {
                loop(`${pin}${bigArr[count][i]}`, count + 1);
            }
        }
    }

    loop('', 0);

    console.log(result);
    return result;

}



//11
//11,12,14,21,22,24,41,42,44