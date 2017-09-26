/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */

function TreeLinkNode(val) {
    this.val = val;
    this.left = this.right = null;
}

/**
 * @param {number[]} preorder
 * @param {number[]} inorder
 * @return {TreeNode}
 */
var buildTree = function(preorder, inorder) {
    return buildTreeFromBoth(preorder, 0, preorder.length -1, inorder, 0, inorder.length -1);
};

function buildTreeFromBoth(preorder, prestart, preend, inorder, instart, inend) {
    if(prestart > preend || instart > inend)return null;
    var rootVal = preorder[prestart];
    var root = new TreeLinkNode(rootVal);

    var rootIndex = 0;
    for(var i = instart; i <= inend; i++){
        if(inorder[i] == rootVal){
            rootIndex = i;
            break;
        }
    }
    var gap = rootIndex - instart;
    var left = buildTreeFromBoth(preorder, prestart + 1, prestart + gap, inorder, instart, rootIndex - 1);
    var right = buildTreeFromBoth(preorder, prestart + gap + 1, preend, inorder, rootIndex + 1, inend);
    if(!left && !right){
        delete root.left;
        delete root.right;
    }
    else if(left && !right){
        root.left = left;
        delete root.right;
    }
    else {
        root.left = left;
        root.right = right;
    }
    return root;

}


module.exports = buildTree;