//https://leetcode.com/problems/combination-sum-ii/
/**
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 */
var combinationSum2 = function(candidates, target) {
    if(candidates.length === 0)return [];
    if(target <= 0)return [];

    var result = [], subResult = [];

    candidates = candidates.sort(function(a,b){
        return a - b;
    });

    dfs(candidates, target, subResult, result, 0);

    return result;
};

var dfs = function(nums, target, subA, A, pos){
    //if(target < 0)return;
    if(target === 0){
        A.push(subA);
        return;
    }
    for(var i = pos; i < nums.length; i++){
        if(target - nums[i] >=0){
            subA.push(nums[i]);
            dfs(nums, target - nums[i], subA.slice(0), A, i+1);
            subA.pop();
            while (i < nums.length - 1 && nums[i] == nums[i+1])
                i++;
        }

    }

};


var a = [10,1,2,7,6,1,5], t = 8;
//var result = [
//    [1, 7]
//        [1, 2, 5]
//        [2, 6]
//        [1, 1, 6]
//];

console.log(combinationSum2(a, t));