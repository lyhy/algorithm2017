//https://leetcode.com/problems/valid-palindrome/
var isAlphaB = function(c){
    return /[a-zA-Z0-9]/.test(c);
}
/**
 * @param {string} s
 * @return {boolean}
 */
var isPalindrome = function(s) {
    if(s.length === 0)return true;
    var l=0,r=s.length-1,result=true;
    var lChar, rChar;

    while(l<r){
        lChar = s[l].toLowerCase();
        rChar = s[r].toLowerCase();
        if(isAlphaB(lChar) && isAlphaB(rChar) && (lChar !== rChar))return false;
        if(!isAlphaB(lChar)){
            l++
        }else if(!isAlphaB(rChar)){
            r--;
        }else{
            l++;
            r--;
        }
    }


    return result;

};


console.log(isPalindrome("A man, a plan, a canal: Panama"));//true;
//console.log(isPalindrome("race a car"));//false;
