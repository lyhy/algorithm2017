//https://leetcode.com/problems/word-pattern/

/**
 * @param {string} pattern
 * @param {string} str
 * @return {boolean}
 */
var wordPattern = function(pattern, str) {
    pattern = pattern.split('');
    str = str.split(' ');
    var dict = {};
    if(pattern.length !== str.length)return false;
    for(var i = 0; i < pattern.length; i++){
        if(!dict[pattern[i]])dict[pattern[i]] = str[i];
        if(dict[pattern[i]]!==str[i])return false;
    }

    dict = {};
    for(var i = 0; i < str.length; i++){
        if(!dict[str[i]])dict[str[i]] = pattern[i];
        if(dict[str[i]]!==pattern[i])return false;
    }

    return true;
};

/*
* pattern = "abba", str = "dog cat cat dog" should return true.
 pattern = "abba", str = "dog cat cat fish" should return false.
 pattern = "aaaa", str = "dog cat cat dog" should return false.
 pattern = "abba", str = "dog dog dog dog" should return false.
* */
var pattern = 'abba', str = "dog dog dog dog";
console.log(wordPattern(pattern, str));