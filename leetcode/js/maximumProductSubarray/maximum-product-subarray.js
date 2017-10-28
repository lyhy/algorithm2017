/**
 * @param {number[]} nums
 * @return {number}
 */
var maxProduct = function(nums) {
    var len = nums.length, res = nums[0], min = nums[0], max = nums[0], temp, cur;
    if(len === 0)return 0;
    for(var i = 1; i < len; i++){
        cur = nums[i];
        if(cur >= 0){
            max = Math.max(max * cur, cur);
            min = Math.min(min * cur, cur);
        }else{
            temp = max;
            max = Math.max(min * cur, cur);
            min = Math.min(temp * cur, cur);
        }
        res = Math.max(res, max);
    }
    return res;
};

module.exports = maxProduct;