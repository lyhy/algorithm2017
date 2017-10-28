//https://leetcode.com/problems/excel-sheet-column-number/

/*
*A -> 1
 B -> 2
 C -> 3
 ...
 Z -> 26
 AA -> 27
 AB -> 28
* */
//0,1,2,....9,10
/**
 * @param {string} s
 * @return {number}
 */
var titleToNumber = function(s) {
    var num=0, base = 26, zero = 'A'.charCodeAt(0)-1, len = s.length;
    for(var i = 0; i < len; i++){
        num += (s.charCodeAt(i) - zero)* Math.pow(base,len-i-1);
    }
    return num;
};

console.log(titleToNumber('Z'));
console.log(titleToNumber('AA'));
console.log(titleToNumber('AB'));