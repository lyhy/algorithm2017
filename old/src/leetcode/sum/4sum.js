//https://leetcode.com/problems/4sum/
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[][]}
 */
var fourSum = function(nums, target) {
    nums = nums.sort();
    var len = nums.length;
    var sub, subTarget, l, r, sum, item, result = [];
    if(nums.length <=3)return [];

    for(var i = 0; i < len-3; i++){
        for(var k = len -1; k > i + 2; k--){
            sub = nums[i] + nums[k];
            subTarget = target - sub;
            l = i + 1;
            r = k - 1;
            while(l < r){
                sum = nums[l] + nums[r];
                if(sum === subTarget){
                    item = [];
                    item.push(nums[i]);
                    item.push(nums[l]);
                    item.push(nums[r]);
                    item.push(nums[k]);
                    result.push(item);
                    l++;
                    r--;
                }else if(sum < subTarget){
                    l++;
                }else{
                    r--;
                }
            }
        }
    }


    return result;
};

/*
 For example, given array S = {1 0 -1 0 -2 2}, and target = 0.

 A solution set is:
 (-1,  0, 0, 1)
 (-2, -1, 1, 2)
 (-2,  0, 0, 2)
 */
//var s = [1, 0, -1, 0, -2, 2];
//var t = 0;
var s = [0,0,0,0];
var t = 1;

console.log(fourSum(s, t));
