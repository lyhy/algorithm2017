//https://leetcode.com/problems/combination-sum/
/**
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 */
var combinationSum = function(candidates, target) {
    if(candidates.length === 0)return [];
    if(target <= 0)return [];

    var result = [], subResult = [];

    candidates = candidates.sort(function(a,b){
        return a - b;
    });

    dfs(candidates, target, subResult, result);

    return result;
};

var dfs = function(nums, target, subA, A){
    //if(target < 0)return;
    if(target === 0){
        A.push(subA);
        return;
    }
    for(var i = 0; i < nums.length; i++){
        if(target - nums[i] >=0){
            subA.push(nums[i]);
            dfs(nums.slice(i), target - nums[i], subA.slice(0), A);
            subA.pop();
        }

    }

};


var a = [2,3,6,7], t = 7;
var result = [
    [7]
        [2, 2, 3]
];

console.log(combinationSum(a, t));