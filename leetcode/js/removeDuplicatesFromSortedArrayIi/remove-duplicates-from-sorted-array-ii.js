/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function(nums) {
    if(!Array.isArray(nums))return 0;
    var len = nums.length;
    if(len <=2 )return len;
    var ret = 2;
    for(var i = 2; i < len; i++) {
    	if(nums[ret-2]!==nums[i])nums[ret++] = nums[i];
    }

    return ret;
    
};

module.exports = removeDuplicates;