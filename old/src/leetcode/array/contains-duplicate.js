//https://leetcode.com/problems/contains-duplicate/
/**
 * @param {number[]} nums
 * @return {boolean}
 */
var containsDuplicate = function(nums) {
    // if(nums.length===0)return false;
    var dict = {};
    for(var i = 0; i<nums.length; i++){
        if(dict[nums[i]])return true;
        dict[nums[i]]=true;
    }
    return false;
};