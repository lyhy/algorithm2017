//https://leetcode.com/problems/regular-expression-matching/
/**
 * @param {string} s
 * @param {string} p
 * @return {boolean}
 */
var isMatch = function(s, p) {
    if(p.length === 0)return s.length ===0;
    if(p.length === 1 || p[1] !== '*'){
        if(s.length === 0 || (p[0] !== '.' && p[0] !== s[0]))return false;
        return isMatch(s.substring(1), p.substring(1));
    }else{
        while(s.length > 0 && (p[0]===s[0] || p[0]==='.')){
            if(isMatch(s, p.substring(2))){
                return true;
            }
            s = s.substring(1);
        }
        return isMatch(s, p.substring(2));

    }

};
console.log(isMatch("aa","a")) ;// false
console.log(isMatch("aa","aa")) ;//true
console.log(isMatch("aaa","aa")) ;//false
console.log(isMatch("aa", "a*")) ;//true
console.log(isMatch("aa", ".*")) ;//true
console.log(isMatch("ab", ".*")) ;//true
console.log(isMatch("aab", "c*a*b")) ;//true