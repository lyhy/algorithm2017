/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isSubsequence = function(s, t) {
    if(!s || !t || s.length > t.length)return false;
    var sIndex = 0, tIndex = 0, sLen = s.length, tLen = t.length;

    while(tIndex < tLen){
        if(s[sIndex] === t[tIndex]){
            sIndex++;
        }
        if(sIndex === s.length)return true;

        tIndex++;
    }

    return false;

};


//var s = "abc", t = "ahbgdc", ret = true;
var s = "axc", t = "ahbgdc", ret = false;
console.log(isSubsequence(s, t));