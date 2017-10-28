//https://leetcode.com/problems/combinations/

/**
 * @param {number} n
 * @param {number} k
 * @return {number[][]}
 */
var combine = function(n, k) {
    var res = [];
    var sol = [];
    getCombine(n,k,1,sol, res);

    return res;
};

var getCombine = function(n,k,level, sol, res){
    if(sol.length === k){
        res.push(sol.slice(0));
        return;
    }

    for(var i = level; i <= n; i++){
        sol.push(i);
        getCombine(n,k,i+1, sol,res);
        sol.pop();
    }
};


/*
* If n = 4 and k = 2, a solution is:

 [
 [2,4],
 [3,4],
 [2,3],
 [1,2],
 [1,3],
 [1,4],
 ]
* */

var n = 4, k = 2;
console.log(combine(n,k));