//https://leetcode.com/problems/length-of-last-word/
/*
 Given a string s consists of upper/lower-case alphabets and empty space characters ' ', return the length of last word in the string.
 If the last word does not exist, return 0.
 Note: A word is defined as a character sequence consists of non-space characters only.
 For example,  Given s = "Hello World", return 5.
* */

function lengthWord(s){
    if(s.length === 0) return 0;
    var startCount = s[s.length-1] === ' ' ? false : true;
    var count = 0;
    for(var i = s.length-1; i>=0; i--){
        if(s[i] === ' '){
            if(startCount){
                return count;
            }
        }else{
            if(!startCount){
                startCount = true;
            }
            startCount && count++
        }

    }

    return count;
}
//console.log(lengthWord('abc def'));//3
console.log(lengthWord('a '));//1


module.exports=lengthWord;
