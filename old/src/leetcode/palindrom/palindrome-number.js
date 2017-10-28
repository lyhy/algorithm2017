//https://leetcode.com/problems/palindrome-number/
/**
 * @param {number} x
 * @return {boolean}
 */
    //note: do it without extra space
var isPalindrome = function(x) {
    if(x<0)return false;
    var l, r;
    var len = 0;
    var num = x;
    while(num){
        len++;
        num = Math.floor(num/10);
    }
    l = 0; r = len, num = x;
    while(l<r){
        if(Math.floor(num/Math.pow(10, (r-l-1)))!== num%10) return false;
        num = Math.floor(num%(Math.pow(10, (r-l-1)))/10);
        l++;
        r--;

    }
    return true;
};

//console.log(isPalindrome(123));//false
//console.log(isPalindrome(121));//true
console.log(isPalindrome(9999));//true