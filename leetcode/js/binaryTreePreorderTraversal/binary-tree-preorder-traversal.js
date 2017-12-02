/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */


/**
 * @param {TreeNode} root
 * @return {number[]}if
 */
var preorderTraversal = function(node, paths, path) {
    path.push(node.val);
    if(!node.left && !node.right){
        paths.push(path.slice());
    }else {
        node.left && preorderTraversal(node.left, paths, path);
        node.right && preorderTraversal(node.right, paths, path);
    }
    path.splice(-1);


};

var rootPath = function(node){
    var paths = [];
    if(!node)return paths;


    preorderTraversal(node, paths, []);

    return paths;
}


function TreeNode(val) {
     this.val = val;
     this.left = this.right = null;
}

var n1 = new TreeNode(1);
var n2 = new TreeNode(2);
var n3 = new TreeNode(3);
var n4 = new TreeNode(4);
var n5 = new TreeNode(5);
var n6 = new TreeNode(6);

n1.left = n2;
n1.right = n3;
n2.left = n4;
n2.right = n5;
//n3.left = n6;


var a1 = rootPath(n1);

console.log(a1);