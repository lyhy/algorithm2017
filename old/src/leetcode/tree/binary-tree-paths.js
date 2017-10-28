//https://leetcode.com/problems/binary-tree-paths/
function TreeNode(val) {
    this.val = val;
    this.left = this.right = null;
}

var res = [];
/**
 * @param {TreeNode} root
 * @return {string[]}
 */
var binaryTreePaths = function(root) {
    if(root!==null)findPath(root, root.val+'');
    return res;
};

var findPath = function(root, path){
    if(root.left === null && root.right === null)res.push(path);
    if(root.left !== null)findPath(root.left, path + '->' + root.left.val);
    if(root.right !== null)findPath(root.right, path + '->' + root.right.val);
};

var root = new TreeNode(1);
root.left = new TreeNode(2);
//root.left.left = new TreeNode(5);
//root.left.right = new TreeNode(6);
//root.right = new TreeNode(3);

console.log(binaryTreePaths(root));//["1->2->5", "1->3"]
