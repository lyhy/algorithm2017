//https://leetcode.com/problems/lowest-common-ancestor-of-a-binary-search-tree/
function TreeNode(val) {
    this.val = val;
    this.left = this.right = null;
}
/**
 * @param {TreeNode} root
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {TreeNode}
 */
var lowestCommonAncestor = function(root, p, q) {
    if(root===null || p===null || q===null)return null;
    if(root.val === p.val || root.val === q.val)return root;
    if(root.val > p.val && root.val > q.val){
        return lowestCommonAncestor(root.left, p, q);
    }else if(root.val < p.val && root.val < q.val){
        return lowestCommonAncestor(root.right, p, q);
    }else {
        return root;
    }

};
var root = new TreeNode(6);
var rootleft = new TreeNode(2);
var rootright = new TreeNode(8);
var twoleft = new TreeNode(0);
var tworight = new TreeNode(4);
var fourleft = new TreeNode(3);
var fourright = new TreeNode(5);
var eightleft = new TreeNode(7);
var eightright = new TreeNode(9);

root.left = rootleft;
root.right = rootright;
rootleft.left = twoleft;
rootleft.right = tworight;
tworight.left = fourleft;
tworight.right = fourright;
rootright.left = eightleft;
rootright.right = eightright;

//console.log(lowestCommonAncestor(root, rootleft, rootright));
console.log(lowestCommonAncestor(root, rootleft, tworight));