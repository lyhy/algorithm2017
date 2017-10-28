//https://leetcode.com/problems/contains-duplicate-ii/
/**
 * @param {number[]} nums
 * @param {number} k
 * @return {boolean}
 */
var containsNearbyDuplicate = function(nums, k) {
    var dict = {};
    for(var i = 0; i < nums.length; i++){
        if(typeof dict[nums[i]]=== 'undefined'){
            dict[nums[i]] = i;
        }else{
            if(i-dict[nums[i]]>0 && i-dict[nums[i]] <= k)return true;
            dict[nums[i]] = i;
        }
    }

    return false;
};


console.log(containsNearbyDuplicate([1,2,3,2,2], 1));