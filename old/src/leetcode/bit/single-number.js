//https://leetcode.com/problems/single-number/
/**
 * @param {number[]} nums
 * @return {number}
 */
var singleNumber = function(nums) {
    return nums.reduce(function(prev, current){
       return prev ^ current;
    });
};


var nums = [1,2,3,4,2,1,4];

console.log(singleNumber(nums));