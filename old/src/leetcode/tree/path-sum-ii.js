//https://leetcode.com/problems/path-sum-ii/

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
var res = [];
/**
 * @param {TreeNode} root
 * @param {number} sum
 * @return {number[][]}
 */
var pathSum = function(root, sum) {
    res = [];
    if(root === null)return [];

    findPath(root, sum, []);

    return res;
};

var findPath = function(root, sum, prevA){
    if(root.val === sum && root.left === null && root.right === null){
        prevA.push(root.val);
        res.push(prevA);
        return;
    }

    prevA.push(root.val);

    root.left && findPath(root.left, sum-root.val, prevA.slice(0));
    root.right && findPath(root.right, sum-root.val, prevA.slice(0));
}

/**
 *
 * Given the below binary tree and sum = 22,
 5
 / \
 4   8
 /   / \
 11  13  4
 /  \    / \
 7    2  5   1
 return
 [
 [5,4,11,2],
 [5,8,4,5]
 ]
 */

var root = new TreeNode(5);
root.left = new TreeNode(4);
root.right = new TreeNode(8);
root.left.left = new TreeNode(11);
root.left.left.left = new TreeNode(7);
root.left.left.right = new TreeNode(2);
root.right.left = new TreeNode(13);
root.right.right = new TreeNode(4);
root.right.right.left = new TreeNode(5);
root.right.right.right = new TreeNode(1);
//22

//var root = new TreeNode(1);
//root.left = new TreeNode(2);

pathSum(root,22);
console.log(res);

