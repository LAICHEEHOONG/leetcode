//11. Container With Most Water

const maxArea = function (height) {
    let arrayInsideFn = arrayInside(height);
    return Math.max(...arrayInsideFn);
};

function arrayInside(h) {
    const result = [];
    for (let i = 0; i < h.length; i++) {
        for (let j = 1; j < h.length; j++) {
            if (j < h.length && j > i) {
                let arr = [h[i], h[j], (j - i)];
                let x = arr[0];
                let y = arr[1];
                let z = arr[2];
                if (x === y || y > x) {
                    result.push(x * z);
                } else {
                    result.push(y * z);
                } 
            }
        }
    }
    return result;
}
