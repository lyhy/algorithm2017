/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function(nums) {
    if(!Array.isArray(nums) || !nums.length)return 0;
    let ret = 1;
    for(var i = 1, len = nums.length; i < len ; i++){
        if(nums[i] !== nums[ret-1])nums[++ret] = nums[i];
    }

    return ret;

    
};

module.exports = removeDuplicates;