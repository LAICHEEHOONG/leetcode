// Write a function to find the longest common prefix string amongst an array of strings.

// If there is no common prefix, return an empty string "".
function longestCommonPrefix (strs) {
    if (strs.length === 0) return '';
    let prefix = strs[0];
    let resultArr = [];
    let resultArrLength = [];
    let smallerLength;
    resultArr.forEach(str => {
        resultArrLength.push(str.length)
    })
    smallerLength = Math.min(...resultArrLength);
    strs.forEach(str => {
        for (let i = 0; i < prefix.length; i++) {
            if (prefix.substring(i, i + 1) === str.substring(i, i + 1)) {
                if (resultArr[i] !== 0) {
                    resultArr[i] = prefix.substring(i, i + 1);
                }
            } else {
                resultArr[i] = 0;
            }
        }
    })
    resultArr = resultArr.slice(0, smallerLength);
    const indexResultArr = resultArr.indexOf(0);
    if (indexResultArr !== -1) {
        let result = resultArr.slice(0, indexResultArr);
        return result.join('')
    } else {
        return resultArr.join('');
    }
}



longestCommonPrefix(["flower", "flow", "flight"]);//fl
longestCommonPrefix(["dog", "racecar", "car"]);//''
longestCommonPrefix(["flower", "flower", "flower"]);//flower
longestCommonPrefix(["cir", "car"]);//c
longestCommonPrefix(["aa", "aa"]);//aa
longestCommonPrefix(["aaa", "aa", "aaa"]);//aa
longestCommonPrefix(["c", "acc", "ccc"]);//''








