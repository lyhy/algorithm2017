//https://leetcode.com/problems/symmetric-tree/
function TreeNode(val) {
    this.val = val;
    this.left = this.right = null;
}
var isSymmetricSubTree = function(root1, root2){
    if(root1===null && root2===null)return true;
    if(root1===null || root2===null)return false;
    if(root1.val !== root2.val)return false;
    return isSymmetricSubTree(root1.left, root2.right) && isSymmetricSubTree(root1.right, root2.left);
};
var isSymmetric = function(root) {
    if(root===null)return true;
    if(root.left===null && root.right===null)return true;
    if(root.left===null || root.right===null)return false;
    if(root.left.val !== root.right.val)return false;
    return isSymmetricSubTree(root.left, root.right);
};



var tree1 = new TreeNode(1);
tree1.left = new TreeNode(2);
tree1.right = new TreeNode(2);

var tree2 = new TreeNode(1);
tree2.left = new TreeNode(2);
tree2.right = new TreeNode(3);

console.log(isSymmetric(tree1));//true
console.log(isSymmetric(tree2));//false

