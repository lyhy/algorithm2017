/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var search = function(nums, target) {
    if(!Array.isArray(nums) || !nums.length)return -1;
    var first = 0, last = nums.length, middle;

    while(first !== last){
    	middle = parseInt((last + first)/2);
    	if(nums[middle] === target)return middle;
    	if(nums[first] <= nums[middle]){
    		if(nums[first] <= target && target < nums[middle]){
    			last = middle;
    		}else {
    			first = middle + 1;
    		}
    	}else {
    		if(nums[last-1] >= target && target > nums[middle]){
    			first = middle + 1;
    		}else {
    			last = middle ;
    		}
    	}
    }

    return -1;
};

module.exports = search;