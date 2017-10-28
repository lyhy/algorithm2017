//https://leetcode.com/problems/factorial-trailing-zeroes/
/**
 * @param {number} n
 * @return {number}
 */
var trailingZeroes = function(n) {
    var result = 0;
    var value;

    while(n){
        value = Math.floor(n/5);
            result += value;
            n = n/5;
    }
    return result;
};

console.log(trailingZeroes(6))//1