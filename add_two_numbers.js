// Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.

// You may assume that each input would have exactly one solution, and you may not use the same element twice.

// You can return the answer in any order.



// Example 1:

// Input: nums = [2,7,11,15], target = 9
// Output: [0,1]
// Explanation: Because nums[0] + nums[1] == 9, we return [0, 1].

// Example 2:
// Input: nums = [3,2,4], target = 6
// Output: [1,2]

// Example 3:
// Input: nums = [3,3], target = 6
// Output: [0,1]

// /**
//  * @param {number[]} nums
//  * @param {number} target
//  * @return {number[]}
//  */

const twoSum = (nums, target) => {
    //create second array 
    let arr1 = nums;
    let arr2 = nums;
    let result;

    //loop 2 array together , sum to match target

    arr1.forEach((int1, x) => {
        arr2.forEach((int2, y) => {
            if(x === y) {
                return;
            };

            let sum = int1 + int2;
            if(sum === target) {
                if(!result) {
                    console.log(int1,int2)
                    result = [x, y]
                    return;
                } ;
                return;
            }
        })
    });


    //return the loop index to a array
    console.log(result);
    return result;
};

twoSum([2, 7, 11, 15], 9);
twoSum([3, 2, 4], 6);
twoSum([3, 3], 6);

