//https://leetcode.com/problems/path-sum/

/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
function TreeNode(val) {
    this.val = val;
    this.left = this.right = null;
}
/**
 * @param {TreeNode} root
 * @param {number} sum
 * @return {boolean}
 */
var hasPathSum = function(root, sum) {
    if(root === null)return false;
    if(root.left === null && root.right === null && root.val === sum)return true;
    return hasPathSum(root.left, sum-root.val) || hasPathSum(root.right, sum-root.val);
};

var tree1 = new TreeNode(1);
tree1.left = new TreeNode(2);
tree1.right = new TreeNode(3);

console.log(hasPathSum(tree1, 3));//true


