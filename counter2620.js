var createCounter = function (n) {
    let carry = n - 1;
    return function () {
        carry = carry + 1;
        return carry;
    };
};

const counter = createCounter(10);
console.log(counter()); // Output: 10
console.log(counter()); // Output: 11
console.log(counter()); // Output: 12
