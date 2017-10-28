//https://leetcode.com/problems/binary-tree-level-order-traversal-ii/

function TreeNode(val) {
    this.val = val;
    this.left = this.right = null;
}

/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[][]}
 */
var levelOrderBottom = function(root) {
    if(root === null) return [];
    var result = [];
    var queue = [];
    var level;
    var first;
    var levelLen;
    queue.push(root);
    while(queue.length){
        level = [];
        levelLen = queue.length;
        while(levelLen>0){
            first = queue.shift();
            levelLen--;
            if(first!==null){
                level.push(first.val);
                first.left && queue.push(first.left);
                first.right && queue.push(first.right);
            }
        }
        result.push(level);
    }

    return result.reverse();

};
var root = new TreeNode(1);
root.left = new TreeNode(2);
root.right = new TreeNode(3);

console.log(levelOrderBottom(root));