//https://leetcode.com/problems/number-of-1-bits/
/**
 * @param {number} n - a positive integer
 * @return {number}
 */
var hammingWeight = function(n) {
    var str = Number(n).toString(2);
    var a = str.split('');
    var result = a.reduce(function(prev,current){
        return parseInt(prev, 10) + parseInt(current, 10);
    });

    return parseInt(result,10);
};
//console.log(hammingWeight(0));//3
console.log(typeof hammingWeight(0));//3