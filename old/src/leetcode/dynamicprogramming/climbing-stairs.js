//https://leetcode.com/problems/climbing-stairs/

/**
 * @param {number} n
 * @return {number}
 */
var climbStairs = function(n) {
    if(n===1 || n===2)return n;
    var a = 1;
    var b = 2;
    var sum;
    for(var i=3;i<=n;i++){
        sum = a+b;
        a = b;
        b = sum;
    }
    return sum;
    //return climbStairs(n-1) + climbStairs(n-2);

};

console.log(climbStairs(40));