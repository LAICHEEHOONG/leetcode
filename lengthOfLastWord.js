//58. Length of Last Word

const lengthOfLastWord = (s) => {
    let strs = s.trim();
    let arr = strs.split('');
 
    let lastWord = arr[arr.length - 1].length;
 
    return lastWord
 }
 
 lengthOfLastWord("Hello World");//5
 lengthOfLastWord("   fly me   to   the moon  ");//4
 lengthOfLastWord("luffy is still joyboy");//6