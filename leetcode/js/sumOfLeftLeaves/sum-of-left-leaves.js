/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number}
 */
var sumOfLeftLeaves = function(root) {
    var queue = [root];
    var ret = 0; cur = null;
    while(queue.length){
        cur = queue.shift();
        if(cur){
            cur.right && queue.push(cur.right);
            cur.left && queue.push(cur.left);

            if(cur.left && !cur.left.left  && !cur.left.right){
                ret += cur.left.val;
            }
        }
    }

    return ret;
};

function TreeNode(val) {
    this.val = val;
    this.left = this.right = null;
}
//var root = new TreeNode(3);
//var n1 = new TreeNode(9);
//var n2 = new TreeNode(20);
//var n3 = new TreeNode(15);
//var n4 = new TreeNode(7);
//root.left = n1;
//root.right = n2;
//n1.left = n3;
//n2.right = n4;

/**
 * 3
 / \
 9  20
 /  \
 15   7
 */
//output =24


var root = new TreeNode(1);
var n1 = new TreeNode(2);
var n2 = new TreeNode(3);
var n3 = new TreeNode(4);
var n4 = new TreeNode(5);
root.left = n1;
root.right = n2;
n1.left = n3;
n1.right = n4;

//expet = 4;
console.log(sumOfLeftLeaves(root));