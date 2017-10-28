//https://leetcode.com/problems/missing-number/
/**
 * @param {number[]} nums
 * @return {number}
 */
var missingNumber = function(nums) {
    var result = nums.length;
    var index = 0;
    for(var i = 0; i < nums.length; i++){
        result ^= nums[i];
        result ^= index;
        index++;
    }

    return result;
};

var nums = [0,2,3];

console.log(missingNumber(nums));