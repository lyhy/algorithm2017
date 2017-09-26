/**
 * Definition for binary tree with next pointer.
 * function TreeLinkNode(val) {
 *     this.val = val;
 *     this.left = this.right = this.next = null;
 * }
 */

function TreeLinkNode(val) {
      this.val = val;
      this.left = this.right = this.next = null;
}


/**
 * @param {TreeLinkNode} root
 * @return {void} Do not return anything, modify tree in-place instead.
 */
var connect = function(root) {
    if(!root)return;
    var levelP = new TreeLinkNode(-1);
    var curr, prev;
    for(curr = root, prev = levelP; curr ; curr = curr.next){
        if(curr.left){
            prev.next = curr.left;
            prev = prev.next;
        }
        if(curr.right){
            prev.next = curr.right;
            prev = prev.next;
        }
    }
    connect(levelP.next);
};

module.exports = connect;