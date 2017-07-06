/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function(nums) {
    if(!Array.isArray(nums) || !nums.length)return 0;
    let ret = 0;
    for(var i = 1, len = nums.length; i < len ; i++){
        if(nums[i] !== nums[ret])nums[++ret] = nums[i];
    }

    return ret+1;

    
};

module.exports = removeDuplicates;