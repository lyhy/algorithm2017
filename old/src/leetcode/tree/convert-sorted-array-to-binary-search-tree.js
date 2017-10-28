// https://leetcode.com/problems/convert-sorted-array-to-binary-search-tree/
function TreeNode(val) {
    this.val = val;
    this.left = this.right = null;
}

/**
 * @param {number[]} nums
 * @return {TreeNode}
 */
var sortedArrayToBST = function(nums) {
    if(nums === null || nums.length === 0)return null;
    return helper(nums, 0, nums.length-1);
};
var helper = function(nums, l, r){
    if(l > r)return null;
    var m = l + Math.floor((r - l)/2);
    var root = new TreeNode(nums[m]);
    root.left = helper(nums, l, m-1);
    root.right = helper(nums, m+1, r);
    return root;
};
var a = [1,2,3,4,5];

console.log(sortedArrayToBST(a));