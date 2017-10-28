//https://leetcode.com/problems/3sum-closest/

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var threeSumClosest = function(nums, target) {
    var len = nums.length;
    var sum, l, r, cur;

    if(len <= 3){
        sum = nums.reduce(function(prev, current){
            return prev + current;
        });
        return sum;
    }

    nums = nums.sort();
    sum = nums[0] + nums[1] + nums[2];
    for(var i = 0; i < len - 2; i++){
        l = i + 1;
        r = len -1;
        while(l < r){
            cur = nums[i]+nums[l]+nums[r];
            //console.log(cur);
            if(cur === target) return cur;
            if(Math.abs(cur - target)<Math.abs(sum - target)){
                sum = cur;
            }
            if(sum < target){
                l++;
            }else{
                r--;
            }
        }
    }
    return sum;
};


/*
 For example, given array S = {-1 2 1 -4}, and target = 1.

 The sum that is closest to the target is 2. (-1 + 2 + 1 = 2).
* */
//var s = [-1, 2, 1, -4];
//var t = 1;
var s = [1, -1, 3, 5, 4, 1];
var t = 1;
console.log(threeSumClosest(s, t));
