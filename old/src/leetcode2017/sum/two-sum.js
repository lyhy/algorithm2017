/*
 Link:
 https://leetcode.com/problems/two-sum/

 Description:
 Given an array of integers, find two numbers such that they add up to a specific target number.

 The function twoSum should return indices of the two numbers such that they add up to the target, where index1 must be less than index2. Please note that your returned answers (both index1 and index2) are not zero-based.
 You may assume that each input would have exactly one solution.

 Given nums = [2, 7, 11, 15], target = 9,

 Because nums[0] + nums[1] = 2 + 7 = 9,
 return [0, 1].

 Hints:
 We can use a hash map to map the number to its index.
 When we traverse the nums list:
 If target - nums[i] in the hash table, return (index1, index2).
 If not, append (nums[i], index) to the hash table
* */

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
