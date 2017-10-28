//https://leetcode.com/problems/remove-duplicates-from-sorted-array/

/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function(nums) {
    if(nums.length === 0)return 0;
    var pre = nums[0], current = 1, index = 1;
    while(index < nums.length){
        if(nums[index]!==pre){
            nums[current] = nums[index];
            ++current;
        }
        pre = nums[index];
        index++;
    }
    return current;


};
var a = [1,1,2,2,3,4,4];
console.log(removeDuplicates(a));//2
console.log(a);