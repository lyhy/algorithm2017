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
var levelOrder = function(root) {
    let ret = [], queue = [root],
        first, levelArr, levelLen;
    if(!root)return ret;
    while(queue.length){
        levelArr = [];
        levelLen = queue.length;
        while(levelLen){
            first = queue.shift();
            levelLen--;
            levelArr.push(first.val);
            first.left && queue.push(first.left);
            first.right && queue.push(first.right);
        }
        ret.unshift(levelArr);
    }
    return ret;
};


function TreeNode(val) {
     this.val = val;
     this.left = this.right = null;
}
var root = new TreeNode(3);
var n1 = new TreeNode(1);
var n2 = new TreeNode(20);
var n3 = new TreeNode(15);
var n4 = new TreeNode(7);
root.left = n1;
root.right = n2;
n2.left = n3;
n2.right = n4;

console.log(levelOrder(root));

