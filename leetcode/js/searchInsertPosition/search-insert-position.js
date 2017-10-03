/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var searchInsert = function(nums, target) {
    if(!nums || !nums.length) return 0;
    var start = 0, end = nums.length -1;

    while(start <= end){
        var mid = start + Math.floor((end - start)/2);
        if(nums[mid] === target) return mid;
        else if(nums[mid] < target) start = ++mid;

        else end = mid - 1;
    }

    return start;
    
};

module.exports = searchInsert;