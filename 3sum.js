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
                            let sortArray = carry3num.sort((a, b) => a - b);
                            result.push(sortArray);
                        
                        }

                   
                        carry3num = [];
                    }
                }
            }
        }
    }

    return result;

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

        matching = filteredArray(matching, cut)

        cut = [];

    }
    return result;
}


function filteredArray(arr, cut) {
    let result = [];
    let push = true;

    for (let i = 0; i < arr.length; i++) {

        for (let j = 0; j < cut.length; j++) {
            if (i === cut[j]) {
                push = false;
                result.push('same');
            }
        }

        if (push) {
            result.push(arr[i])
        }

        push = true

    }

    result = result.filter(el => el !== 'same')
    return result;
}



// threeSum([12, 5, -12, 4, -11, 11, 2, 7, 2, -5, -14, -3, -3, 3, 2, -10, 9, -15, 2, 14, -3, -15, -3, -14, -1, -7, 11, -4, -11, 12, -15, -14, 2, 10, -2, -1, 6, 7, 13, -15, -13, 6, -10, -9, -14, 7, -12, 3, -1, 5, 2, 11, 6, 14, 12, -10, 14, 0, -7, 11, -10, -7, 4, -1, -12, -13, 13, 1, 9, 3, 1, 3, -5, 6, 9, -4, -2, 5, 14, 12, -5, -6, 1, 8, -15, -10, 5, -15, -2, 5, 3, 3, 13, -8, -13, 8, -5, 8, -6, 11, -12, 3, 0, -2, -6, -14, 2, 0, 6, 1, -11, 9, 2, -3, -6, 3, 3, -15, -5, -14, 5, 13, -4, -4, -10, -10, 11]);
threeSum([-1, 0, 1, 2, -1, -4]); //[[-1,-1,2],[-1,0,1]];
threeSum([0, 1, 1]); //[];
threeSum([0, 0, 0]); //[0,0,0];
// threeSum([-1, 0, 1, 2, -1, -4, -2, -3, 3, 0, 4]);//[[-4,0,4],[-4,1,3],[-3,-1,4],[-3,0,3],[-3,1,2],[-2,-1,3],[-2,0,2],[-1,-1,2],[-1,0,1]]