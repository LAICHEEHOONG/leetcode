// function openOrSenior(data){
//     let dataArr = data;
//     let result = [];

//     for(let i = 0; i < dataArr.length; i++) {
//         let age = dataArr[i][0];
//         let handicap = dataArr[i][1];

//         if(age >= 55 && handicap > 7) {
//             result.push('Senior');
//         } else {
//             result.push('Open');
//         }
//     }

//     console.log(result);
//     return result;
// }
function openOrSenior(data) {
    let result = data.map(arr => {
        let age = arr[0];
        let handicap = arr[1];

        return age >= 55 && handicap > 7 ? 'Senior' : 'Open';
    })

    console.log(result);
    return result;
}

openOrSenior([[45, 12], [55, 21], [19, -2], [104, 20]]);