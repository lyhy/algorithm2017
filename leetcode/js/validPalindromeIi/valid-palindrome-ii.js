/**
 * @param {string} s
 * @return {boolean}
 */
var isPalindrome = function(s) {
    return isValidCheckWithLayer(s);
};
var isValidCheckWithLayer = function(s, counter) {
    if(!s || s.length === 1)return true;
    var l = 0, r = s.length, lChar, rChar, ret = true, reg = /[a-z0-9]/i;
    while(l < r) {
        lChar = s.charAt(l).toLowerCase();
        rChar = s.charAt(r).toLowerCase();

        if(reg.test(lChar) && reg.test(rChar) && lChar !== rChar){
            if(counter) return false;
            else{
                counter++;
                return isValidCheckWithLayer(s.substr((l+1), r-l),1) || isValidCheckWithLayer(s.substr(l, r-l),1);
            }
        }

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
}
module.exports = isPalindrome;

//var input =  "cupuufxoohdfpgjdmysgvhmvffcnqxjjxqncffvmhvgsymdjgpfdhooxfuupucu", output = true;
//var input =  "abc", output=false;
var input =  "aydmda", output=true;
console.log(isPalindrome(input));