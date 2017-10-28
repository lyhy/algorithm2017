/**
 * @param {number[]} nums
 * @return {number}
 */
var maxSubArray = function(nums) {
    var ret = nums[0], len = nums.length, f = nums[0];
    for(var i = 1; i < len; i++){
        f = Math.max(f + nums[i], nums[i]);
        ret = Math.max(ret, f);
    }

    return ret;

};

module.exports = maxSubArray;