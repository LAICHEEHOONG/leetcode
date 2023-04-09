//15. 3Sum

const threeSum = (nums) => {
    let result = fileterSame(filterSum(allCompilation(nums)));
    return result;
};

// nums => [0, 1, -1, 0];
// allCompilation(nums) => [[0,1,-1], ..., [1,0,0], ...]
function allCompilation(arr) {
    let loop = arr.length;
    let compilation = [];
    let three = [];
    let second = 1;
    let third = 2;

    for (let i = 0; i < loop; i++) {
        second = i + 1;
        third = i + 2;

        if (second > loop - 1) {
            second = Math.abs(loop - second)
        }
        if (third > loop - 1) {
            third = Math.abs(loop - third);
        }
        for (let j = 0; j < loop - 2; j++) {
            three.push(arr[i]);
            three.push(arr[second]);
            three.push(arr[third]);

            second++;
            third++;

            if (second > loop - 1) {
                second = Math.abs(loop - second)
            }
            if (third > loop - 1) {
                third = Math.abs(loop - third);
            }

            compilation.push(three);
            three = [];
        }
    }

    console.log(compilation);
    return compilation;
}

// filterSum(allCompilation(arr)) => [[0,1,-1], ...]
function filterSum(arr) {
    let filterArr = [];
    arr.forEach(arr1 => {
        let sum = 0;
        arr1.forEach(num => {
            sum = sum + num;
        })
        if (sum === 0) {
            filterArr.push(arr1);
        }
    })
    // console.log(filterArr);
    return filterArr;
}
// filterSum(allCompilation([-1, 0, 1, 2, -1, -4]))

function sortArr(arr) {
    let sorted = [];
    arr.forEach(arr1 => {
        let sort = arr1.sort((a, b) => a - b);
        sorted.push(sort)
    })
    // console.log(sorted);
    return sorted;
}

function findMatch(arr) {
    let match = true;
    let boolArr = [];
    let result = [];

    for (let i = 0; i < arr.length; i++) {
        let compare = arr[i];
        for (let j = 0; j < 3; j++) {
            if (compare[j] === arr[0][j]) {
                if (match) {
                    match = true;
                } else {
                    match = false;
                }
            } else {
                match = false;
            }
        }
        // console.log(match)
        boolArr.push(match)
        match = true;
    }

    result.push(arr[0]);

    for (let z = 0; z < arr.length; z++) {
        if (!boolArr[z]) {
            result.push(arr[z])
        }
    }
    // console.log(result);
    return result;

}

// fileterSame(filterSum(arr)) => [[0,1,-1], [2,-1, -1]]
function fileterSame(arr) {
    let sorted = sortArr(arr);
    let loop;
    if (sorted.length === 0 || sorted.length === 1) {
        console.log(sorted);
        return sorted;
    }

    let match = findMatch(sorted);
    loop = match.length;
    let rotateArr = rotate(match);

    for (let i = 0; i < loop; i++) {
        match = findMatch(rotateArr);
        rotateArr = rotate(match)
    }

    console.log(match);

    return match;
}

function rotate(arr) {
    let rotateArr = []
    for (let i = 0; i < arr.length; i++) {
        let sum = i + 1;
        if (sum > arr.length - 1) {
            rotateArr.push(arr[arr.length - sum])
        } else {
            rotateArr.push(arr[sum])
        }

    }
    return rotateArr;
}



// fileterSame(filterSum(allCompilation([-1, 0, 1, 2, -1, -4])));// [[-1,0,1], [-1,-1,2]]
// fileterSame(filterSum(allCompilation([-1,0,1,2,-1,-4])));// [[-1,-1,2],[-1,0,1]]
// fileterSame(filterSum(allCompilation([0,1,1])));// []
// fileterSame(filterSum(allCompilation([0,0,0])));// [[0,0,0]]

// threeSum([-2,0,1,1,2]);//[[-2,0,2],[-2,1,1]]
// threeSum([-1, 0, 1, 2, -1, -4]);// [[-1,0,1], [-1,-1,2]]
// threeSum([-1,0,1,2,-1,-4]);// [[-1,-1,2],[-1,0,1]]
// threeSum([0,1,1]);// []
// threeSum([0,0,0]);// [[0,0,0]]
// threeSum([-1, 0, 1, 2, -1, -4, -2, -3, 3, 0, 4]);
/** 
[
    [-4,0,4],
    [-4,1,3],
    [-3,-1,4],
    [-3,0,3],
    [-3,1,2],
    [-2,-1,3],
    [-2,0,2],
    [-1,-1,2],
    [-1,0,1]]
*/
//


// function allCompilation2(arr) {
//     const ori = arr;
//     const result = [];
//     let carry3num = [];
//     let carry1 = [];
//     let carry2 = [];
//     let carry3 = [];

//     for (let k = 0; k < ori.length; k++) {
//         loopPush(carry1, k, ori);

//         for (let j = 0; j < ori.length - 1; j++) {
//             let sum2 = j + 1;
//             loopPush(carry2, sum2, ori);

//             for (let i = 0; i < ori.length - 1; i++) {

//                 let sum3 = i + 2;

//                 loopPush(carry3, sum3, ori);
//                 console.log(carry3)
//                 carry3num = [...carry1, ...carry2, ...carry3];
//                 result.push(carry3num);


//                 carry3 = [];
//                 carry3num = [];
//             }
//             carry2 = [];

//         }
//         carry1 = [];
//     }



//     console.log(result)


// }.
function allCompilation2(arr) {
    const ori = arr;
    const result = [];
    let carry3num = [];
    let carry1 = [];
    let carry2 = [];
    let carry3 = [];

    for (let i = 0; i < ori.length; i++) {
        loopPush(carry1, i, ori);
        // console.log(carry1)
        for (let j = 0; j < ori.length - 1; j++) {

            loopPush(carry2, j + i + 1, ori);

            for (let k = 0; k < ori.length - 1; k++) {
                loopPush(carry3, k + i + 2, ori);
                carry3num = [...carry1, ...carry2, ...carry3];
                result.push(carry3num);
                carry1 = [];
                carry2 = [];
                carry3 = [];
                carry3num = [];
            }
        }

    }

    // console.log(carry1, carry2,carry3)

    console.log(result)


}
allCompilation2([0, 1, 2, 3])

function loopPush(carry, index, ori) {
    if (index < ori.length) {
        carry.push(ori[index]);
    } else {
        carry.push(ori[Math.abs(ori.length - index)]);
    }
}

