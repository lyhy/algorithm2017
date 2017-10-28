//https://leetcode.com/problems/majority-element/
/**
 * @param {number[]} nums
 * @return {number}
 */
var majorityElement = function(nums) {
    var dict = {};
    var len = nums.length;
    var majorityNum = Math.ceil(len/2);
    for(var i=0;i<len;i++){
        dict[nums[i]] = typeof dict[nums[i]] === 'undefined'?1:(dict[nums[i]]+1);
        if(dict[nums[i]]>=majorityNum)return nums[i];
    }
    return false;
};

var a = majorityElement([1,1,2,3]);

console.log(a);