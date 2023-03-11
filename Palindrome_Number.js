// Given an integer x, return true if x is a 
// palindrome
// , and false otherwise.

// Example 1:

// Input: x = 121
// Output: true
// Explanation: 121 reads as 121 from left to right and from right to left.

// Example 2:

// Input: x = -121
// Output: false
// Explanation: From left to right, it reads -121. From right to left, it becomes 121-. Therefore it is not a palindrome.

// Example 3:

// Input: x = 10
// Output: false
// Explanation: Reads 01 from right to left. Therefore it is not a palindrome.

/**
 * @param {number} x
 * @return {boolean}
 */

const isPalindrome = (x) => {
    // if number is negative return false
    if(x < 0) {
        console.log('false');
        return false;
    }
    
    // use number x create string y, 
    let y = String(x);
    // string y convert to array
    y = y.split('');
    // reverse y array 
    y = y.reverse();
    // array y convert to string
    y = y.join('')
    
    // if x === y return true else return false
    if(String(x) === y) {
        return true;
    } else {
        return false;
    }
};


isPalindrome(121);
isPalindrome(-121);
isPalindrome(10);