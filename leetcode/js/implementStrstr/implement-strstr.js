/**
 * @param {string} haystack
 * @param {string} needle
 * @return {number}
 */
var strStr = function(haystack, needle) {
    if(typeof haystack !== 'string' || typeof needle !== 'string')return 0;
    if(!needle)return 0;

    var l1 = haystack.length, l2 = needle.length, i, j ;

    for(i = 0; i <= l1 - l2; i++){
        for(j = 0; j < l2; j++){
            if(haystack[i + j] !== needle[j])break;
        }
        if(j === l2){
            return i;
            break;
        }
    }

    return -1;
};

var haystack = 'abc', needle = 'bc';

strStr(haystack, needle);

module.exports = strStr;