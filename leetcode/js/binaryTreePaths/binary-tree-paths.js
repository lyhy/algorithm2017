/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {string[]}
 */
var binaryTreePaths = function(root) {
    let ret = [];

    root && recursivePath(root, '', ret);

    return ret;
};

function recursivePath(node, path, ret) {
    let con = '->';
    if(!node.left && !node.right){
        ret.push(path + node.val);
    }
    if(node.left){
        recursivePath(node.left,path +  node.val + con, ret )
    }
    if(node.right){
        recursivePath(node.right,path  + node.val + con, ret )
    }

}

function TreeNode(val) {
    this.val = val;
     this.left = this.right = null;
}

var n1 = new TreeNode(1);
var n2 = new TreeNode(2);
var n3 = new TreeNode(3);
var n5 = new TreeNode(5);
n1.left = n2;
n1.right = n3;
n2.right = n5;

console.log(binaryTreePaths(n1));

