
function threeSum(nums) {
    let result = match2(allCompilation(nums));
    console.log(result)
    return result;
};

function allCompilation(arr) {
    const ori = arr;
    let result = [];
    let carry3num = [];
    let carry1;
    let carry2;
    let carry3;


    for (let i = 0; i < ori.length; i++) {
        carry1 = ori[i];

        for (let j = 0; j < ori.length; j++) {
            if (j !== i) {
                carry2 = ori[j];
                for (let k = 0; k < ori.length; k++) {
                    if (k !== j && k !== i) {
                        carry3 = ori[k];
                        carry3num = [carry1, carry2, carry3];

                        let sum = 0;
                        carry3num.forEach(num => {
                            sum = sum + num;
                        })
                        if (sum === 0) {
                            result.push(carry3num);
                        }

                        // result.push(carry3num);
                        carry3num = [];
                    }
                }
            }
        }
    }

    result = sortArr(result)

    return result;

}

function fileterSame(arr) {
    let sorted = sortArr(arr);
    let loop;
    if (sorted.length === 0 || sorted.length === 1) {
        return sorted;
    }

    let match = findMatch(sorted);
    loop = match.length;
    let rotateArr = rotate(match);

    for (let i = 0; i < loop; i++) {
        match = findMatch(rotateArr);
        rotateArr = rotate(match)
    }
    return match;
}

function sortArr(arr) {
    let sorted = [];
    arr.forEach(arr1 => {
        let sort = arr1.sort((a, b) => a - b);
        sorted.push(sort)
    })
    return sorted;
}


function match2(arr) {
    let matching = arr;
    const result = [];
    let cut = [];

    while (matching.length > 0) {
        result.push(matching[0])
        for (let i = 0; i < matching.length; i++) {
            let check = true;
            let first = matching[0];
            for (let k = 0; k < first.length; k++) {
                if (check) {
                    if (first[k] === matching[i][k]) {
                        check = true
                    } else {
                        check = false;
                    }
                } else {
                    check = false;
                }
            }
            if (check) {
                cut.push(i);
            }
            check = true;
        }

        if(cut.length !== 0 && matching.length !== 0) {
            cut.forEach(num => {
                matching = filteredArray(matching, num);
            })
        }

        cut = [];
    
    }
    return result;
}


function filteredArray(arr, cut) {
    let arrCut = arr.filter((value, index) => {
        return index !== cut;
    });
    return arrCut;
}

// threeSum([12, 5, -12, 4, -11, 11, 2, 7, 2, -5, -14, -3, -3, 3, 2, -10, 9, -15, 2, 14, -3, -15, -3, -14, -1, -7, 11, -4, -11, 12, -15, -14, 2, 10, -2, -1, 6, 7, 13, -15, -13, 6, -10, -9, -14, 7, -12, 3, -1, 5, 2, 11, 6, 14, 12, -10, 14, 0, -7, 11, -10, -7, 4, -1, -12, -13, 13, 1, 9, 3, 1, 3, -5, 6, 9, -4, -2, 5, 14, 12, -5, -6, 1, 8, -15, -10, 5, -15, -2, 5, 3, 3, 13, -8, -13, 8, -5, 8, -6, 11, -12, 3, 0, -2, -6, -14, 2, 0, 6, 1, -11, 9, 2, -3, -6, 3, 3, -15, -5, -14, 5, 13, -4, -4, -10, -10, 11]);
threeSum([-1, 0, 1, 2, -1, -4]); //[[-1,-1,2],[-1,0,1]];
// threeSum([0, 1, 1]); //[];
// threeSum([0, 0, 0]); //[0,0,0];
// threeSum([-1, 0, 1, 2, -1, -4, -2, -3, 3, 0, 4]);//[[-4,0,4],[-4,1,3],[-3,-1,4],[-3,0,3],[-3,1,2],[-2,-1,3],[-2,0,2],[-1,-1,2],[-1,0,1]]
// allCompilation([-1, 0, 1, 2, -1, -4]); //[[-1,-1,2],[-1,0,1]];
// allCompilation([0,1,1]); //[];
// allCompilation([0,0,0]); //[0,0,0];




// function findMatch(arr) {
//     let match = true;
//     let boolArr = [];
//     let result = [];

//     for (let i = 0; i < arr.length; i++) {
//         let compare = arr[i];
//         for (let j = 0; j < 3; j++) {
//             if (compare[j] === arr[0][j]) {
//                 if (match) {
//                     match = true;
//                 } else {
//                     match = false;
//                 }
//             } else {
//                 match = false;
//             }
//         }
//         // console.log(match)
//         boolArr.push(match)
//         match = true;
//     }

//     result.push(arr[0]);

//     for (let z = 0; z < arr.length; z++) {
//         if (!boolArr[z]) {
//             result.push(arr[z])
//         }
//     }
//     return result;

// }

// function rotate(arr) {
//     let rotateArr = []
//     for (let i = 0; i < arr.length; i++) {
//         let sum = i + 1;
//         if (sum > arr.length - 1) {
//             rotateArr.push(arr[arr.length - sum])
//         } else {
//             rotateArr.push(arr[sum])
//         }

//     }
//     return rotateArr;
// }