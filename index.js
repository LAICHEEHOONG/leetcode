//15. 3Sum

const threeSum = (nums) => {
    let compilation = allCompilation(nums);
    let sumZero = filterSum(compilation);
    let result = fileterSame(sumZero);

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

//allCompilation([-1, 0, 1, 2, -1, -4]); //[0,1,-1]




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
    console.log(filterArr);
    return filterArr;
}
// filterSum(allCompilation([-1, 0, 1, 2, -1, -4]))

// fileterSame(filterSum(arr)) => [[0,1,-1], [2,-1, -1]]
function fileterSame(arr) {
    let arrBefore = arr;
    let result = [];
    let sorted = sortArr(arr);
    let match1 = findMatch(sorted);
    return ''
}

fileterSame(filterSum(allCompilation([-1, 0, 1, 2, -1, -4])));


function sortArr(arr) {
    let sorted = [];
    arr.forEach(arr1 => {
        let sort = arr1.sort((a, b) => a - b);
        sorted.push(sort)
    })
    console.log(sorted);
    return sorted;
}

function findMatch(arr) {
    let ori = arr;
    let cut = [];
    let match = true;
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
    
            cut.push(match);
            match = true;
    
        }
    
        for (let k = 0; k < arr.length; k++) {
            if (!cut[k]) {
                result.push(arr[k]);
            }
        }
    



    console.log(result, 'result');

}