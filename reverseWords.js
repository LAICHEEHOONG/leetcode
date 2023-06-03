function reverseWords(str) {
    let arrStr = str.split(' ');
    let reverseStr = arrStr.map(str => str.split('').reverse().join('')).join(' ');
    console.log(reverseStr)
    return reverseStr;
}

reverseWords('This is an example!');