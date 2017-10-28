//https://leetcode.com/problems/excel-sheet-column-number/

/*
*1 -> A
 2 -> B
 3 -> C
 ...
 26 -> Z
 27 -> AA
 28 -> AB
* */
//0,1,2,....9,10
/**
 * @param {string} s
 * @return {number}
 */
var convertToTitle = function(n) {
    var num=0, base = 26, zero = 'A'.charCodeAt(0)-1, len = s.length;
    for(var i = 0; i < len; i++){
        num += (s.charCodeAt(i) - zero)* Math.pow(base,len-i-1);
    }
    return num;
};

console.log(convertToTitle('1'));
console.log(convertToTitle('2'));
console.log(convertToTitle('27'));
console.log(convertToTitle('28'));