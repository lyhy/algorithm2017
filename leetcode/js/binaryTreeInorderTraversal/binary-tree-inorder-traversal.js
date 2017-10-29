/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[]}
 */
//var inorderTraversal = function(root) {
//    let ret = [];
//    if(!root)return ret;
//    inorderHelper(root, ret);
//
//    return ret;
//};
//
//var inorderHelper = function(node, ret) {
//    node.left && inorderHelper(node.left, ret);
//    ret.push(node.val);
//    node.right && inorderHelper(node.right, ret);
//}

var inorderTraversal = function(root) {
    var ret = [], queue = [root], cur;
    if(!root)return ret;
    while(queue.length){
        cur = queue.shift();

    }

    return ret;
}

var n1 = new TreeNode(1);
var n2 = new TreeNode(2);
var n3 = new TreeNode(3);

n1.right = n2;
n2.left = n3;

console.log(inorderTraversal(n1));