function sumTwoSmallestNumbers(numbers) {
    //Code here
    let intArr = numbers;
    let smallestA = smallest(intArr);
    // console.log(smallestA)
    intArr = removeOne(smallestA, intArr);
    // console.log(intArr)
    let smallestB = smallest(intArr);
    // console.log(smallestB)
    let ans = smallestA + smallestB;
    console.log(ans);
    return ans;

}


// find array smallest
function smallest(numbers) {
    let smallestInt = Math.min(...numbers);
    return smallestInt;
}

// remove selected integer
function removeOne(int, arr) {
    let i = arr.indexOf(int);
    arr.splice(i, 1);
    return arr;
}

sumTwoSmallestNumbers([15, 28, 4, 2, 43])

// let array = [1, 2, 3, 4, 5];
// const indexToRemove = 2; // Index of the element to remove

// array.splice(indexToRemove, 1);

// console.log(array); // Output: [1, 2, 4, 5]