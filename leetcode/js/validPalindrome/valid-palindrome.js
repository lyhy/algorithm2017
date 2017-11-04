/**
 * @param {string} s
 * @return {boolean}
 */
var isPalindrome = function(s) {
    if(!s || s.length === 1)return true;
    var l = 0, r = s.length, lChar, rChar, ret = true, reg = /[a-z0-9]/i;
    while(l < r) {
        lChar = s.charAt(l).toLowerCase();
        rChar = s.charAt(r).toLowerCase();

        if(reg.test(lChar) && reg.test(rChar) && lChar !== rChar)return false;
        if(!reg.test(lChar)){
            l++;
        }else if(!reg.test(rChar)){
            r--;
        }else {
            l++;
            r--;
        }

    }

    return true;
};

module.exports = isPalindrome;