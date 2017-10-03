/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var searchRange = function(nums, target) {
    var ret = [-1, -1];
    if(!nums || !nums.length ) return ret;

    var start = 0, end = nums.length -1;

    while(nums[start] < nums[end]){
        var mid = start + Math.floor((end - start)/2);

        if(nums[mid] > target) end = mid -1;
        else if(nums[mid] < target) start = mid + 1;
        else {
            if(nums[start] < target) start++
            if(nums[end] > target) end--
        }
    }

    if(nums[start] === target){
        ret[0] = start;
        ret[1] = end;
    }

    return ret;
};


module.exports = searchRange;