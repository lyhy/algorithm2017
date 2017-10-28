//https://leetcode.com/problems/subsets/

/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var subsets = function(nums) {
    var res = [];
    var row = [];
    if(nums === null || nums.length === 0)return res;
    nums.sort();
    createSub(nums, row, 0, res);


    return res;
};

var createSub = function(nums, row, index, res){
    res.push(row.slice(0));
    for(var i = index; i< nums.length; i++){
        row.push(nums[i]);
        createSub(nums, row, i+1, res);
        row.pop();
    }
}


/*
* If nums = [1,2,3], a solution is:

 [
 [3],
 [1],
 [2],
 [1,2,3],
 [1,3],
 [2,3],
 [1,2],
 []
 ]
* */
var nums = [1,2,3];
console.log(subsets(nums));