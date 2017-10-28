//https://leetcode.com/problems/contains-duplicate-iii/
function TreeNode(val, index) {
    this.val = val;
    this.index = index;
    this.left = this.right = null;
}

/**
 * @param {number[]} nums
 * @param {number} k
 * @param {number} t
 * @return {boolean}
 */
var containsNearbyAlmostDuplicate = function(nums, k, t) {
    if(nums.length === 0)return false;
    var root = new TreeNode(nums[0], 0);
    var node;
    var p;
    var minIndex = 0;
    for(var i = 1; i<nums.length; i++){
        node = new TreeNode(nums[i], i);
        p = root;
        if(i>=t){
            minIndex = minIndex++;
        }
        while(p){
            if(p)

        }

    }

    return false;
};

/*
*Given an array of integers, find out whether there are two distinct indices i and j in the array s
* uch that the difference between nums[i] and nums[j] is at most t and the difference between i and j is at most k.
 * */
console.log(containsNearbyAlmostDuplicate([1,6,10,3,8,12], 2, 3));//true