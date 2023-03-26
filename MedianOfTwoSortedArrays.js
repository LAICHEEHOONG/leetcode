//4. Median of Two Sorted Arrays



const findMedianSortedArrays = (nums1, nums2) => {
    let nums = [...nums1, ...nums2];
    nums = nums.sort((a, b) => a - b);
    let resultIndex = nums.length / 2;
    let result;
    let isInterger;

    if (Number.isInteger(resultIndex)) {
        isInterger = true;
    } else {
        isInterger = false;
    }
    if (isInterger) {
        let firstIndex = Math.floor(resultIndex) - 1;
        let secondIndex = firstIndex + 1;
        let sum = (nums[firstIndex] + nums[secondIndex]) / 2;
        result = sum;
    } else {
        resultIndex = Math.floor(resultIndex);
        result = nums[resultIndex];
    }
    return result.toFixed(3);
};

findMedianSortedArrays([1, 3], [2]);//2
findMedianSortedArrays([1, 2], [3, 4]);//2.5