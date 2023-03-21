//35. Search Insert Position

const searchInsert = (nums, target) => {
    let result;
    let findIndex = nums.indexOf(target);

    if (findIndex !== -1) {
        result = findIndex;
        return result
    }

    for (let i = 0; i < nums.length; i++) {
        if (target > nums[i] && nums[i + 1] > target) {
            result = i + 1;
            return result
        }

        if(nums[nums.length - 1] === nums[i]) {
            if(nums[nums.length - 1] < target) {
                result = i + 1;
                return result
            }
        }

        if(target < nums[i]) {
            result = i - 1;
            if(result < 0) {
                result = 0;
                return result
            }
            return result;
        }


    }


}

searchInsert([1, 3, 5, 6], 5);//2
searchInsert([1, 3, 5, 6], 2);//1
searchInsert([1, 3, 5, 6], 7);//4
searchInsert([1, 3, 5, 6], 0);//0