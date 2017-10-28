//https://leetcode.com/problems/lowest-common-ancestor-of-a-binary-tree/
/**
 * @param {TreeNode} root
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {TreeNode}
 */
var lowestCommonAncestor = function(root, p, q) {
    if(root === null || p === null || q === null)return null;
    return helper(root, p, q);
};

var helper = function(root, p, q){
    if(root === null || root === p || root === q){
        return root;
    }
    var left = helper(root.left, p, q);
    var right = helper(root.right, p, q);
    if(left !== null && right !== null){
        return root;
    }else{
        return left === null ? right : left;
    }
};
function TreeNode(val) {
    this.val = val;
    this.left = this.right = null;
}

var root = new TreeNode(3);
root.left = new TreeNode(5);
root.right = new TreeNode(1);

console.log(lowestCommonAncestor(root, root.left, root.right));