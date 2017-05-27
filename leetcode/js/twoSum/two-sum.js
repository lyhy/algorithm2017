/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
    var ret = [];
    var numToKey = {};
    nums.forEach(function(item, index){
        numToKey[item] = index;
    });

    for(var i = 0, len = nums.length; i < len; i++ ){
        var anotherIndex = numToKey[target-nums[i]];
        if(anotherIndex && i !== anotherIndex){
            ret.push(i);
            ret.push(anotherIndex);
            break;
        }
    }
    return ret;
};

module.exports = twoSum;

//optimize
/**
 * https://discuss.leetcode.com/topic/2228/my-o-nlogn-and-o-n-time-complexity-solution-with-o-n-space
 *
 * not yet
 */