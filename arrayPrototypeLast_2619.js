//2619. Array Prototype Last

Array.prototype.last = function () {
    if (this.length === 0) {
        console.log(-1)
        return -1;
    } else {
        console.log(this[this.length - 1])
        return this[this.length - 1]
    }
};

/**
 * const arr = [1, 2, 3];
 * arr.last(); // 3
 */

const arr = [1, 2, 3];
arr.last(); // 3