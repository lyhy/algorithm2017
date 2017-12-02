/**
 * Given an array nums and a target value k, find the maximum length of a subarray that sums to k. If there isn't one, return 0 instead.

 Example 1:
 Given nums = [1, -1, 5, -2, 3], k = 3,
 return 4. (because the subarray [1, -1, 5, -2] sums to 3 and is the longest)

 Example 2:
 Given nums = [-2, -1, 2, 1], k = 1,
 return 2. (because the subarray [-1, 2] sums to 1 and is the longest)

 Follow Up:
 Can you do it in O(n) time?
 *
 */

var maxSubArrayLen = function(nums,  k) {
    if(!nums || !nums.length)return 0;
    var max = 0;
    var map = {}, sum = 0;
    for(var i = 0, len = nums.length; i < len; i++){
        sum += nums[i];

        if(typeof map[sum] === 'undefined'){
            map[sum] = i;
        }

        if(sum === k){
            max = i + 1;
        }else if(typeof map[sum-k] !== 'undefined'){
            var index = map[sum-k];
            max = Math.max(max, i - index);
        }



}


    return max;
}

var nums =       [-8,1, -1, 5, -2, 3], k = 3;
var sum =        [-8,-7,-8,-3, -5, -2];
var summinusk =  [-11,-10,-11,-6,-8,-5];
var max =        [];
console.log(maxSubArrayLen(nums,k));