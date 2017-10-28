//https://leetcode.com/problems/validate-binary-search-tree/
function TreeNode(val) {
    this.val = val;
    this.left = this.right = null;
}
var isValidBST = function(root) {
    if(root===null)return true;
    return isValidInRange(root,  -Number.MAX_VALUE, Number.MAX_VALUE);
};
var isValidInRange = function(root, min, max){
    if(root === null)return true;
    if(root.val <= min || root.val >=max)return false;
    return isValidInRange(root.left, min, root.val) && isValidInRange(root.right, root.val, max)
}
/*
//n square
var isValidBST = function(root) {
    if(root===null)return true;
    if(!dfsLeft(root.left, root.val) || !dfsRight(root.right, root.val))return false;
    return isValidBST(root.left) && isValidBST(root.right);
};
var dfsLeft = function(root, value){
    if(root===null)return true;
    if(root.val>=value)return false;
    return dfsLeft(root.left, value) && dfsLeft(root.right, value);
}
var dfsRight = function(root, value){
    if(root===null)return true;
    if(root.val<=value)return false;
    return dfsRight(root.left, value) && dfsRight(root.right, value);
}*/

//inorder traversal to create asecending array, o(n)
/*
 public class Solution {
 List<Integer> list = new ArrayList<Integer>();

 public boolean isValidBST(TreeNode root) {
 if (root == null) return true;
 if (root.left == null && root.right == null) return true;
 inOrderTraversal(root);
 for (int i = 1; i < list.size(); i++) {
 if (list.get(i) <= list.get(i - 1)) return false;
 }
 return true;
 }

 public void inOrderTraversal(TreeNode root) {
 if (root == null) return;
 inOrderTraversal(root.left);
 list.add(root.val);
 inOrderTraversal(root.right);
 }
 }
* */

//#3 inorder without extra space
/*
 public class Solution {
 // Keep the previous value in inorder traversal.
 TreeNode pre = null;

 public boolean isValidBST(TreeNode root) {
 // Traverse the tree in inorder.
 if (root != null) {
 // Inorder traversal: left first.
 if (!isValidBST(root.left)) return false;

 // Compare it with the previous value in inorder traversal.
 if (pre != null && root.val <= pre.val) return false;

 // Update the previous value.
 pre = root;

 // Inorder traversal: right last.
 return isValidBST(root.right);
 }
 return true;
 }
 }
* */
//testing
//var root = new TreeNode(5);
//root.right = new TreeNode(6);
//root.right.left = new TreeNode(4);

var root = new TreeNode(0);

console.log(isValidBST(root));

//var a = inorderTraversal(root);

//testing
//'use strict'
//require('babel-core/register')
//var Mocha = require('mocha');
//var expect = require('chai').expect;
//var mocha = new Mocha({ui: 'bdd'});
//mocha.suite.emit('pre-require', this, 'solution', mocha);
//
//describe("test", () => {
//    it('it', function(){
//        expect(isValidBST(root)).to.be.false;
//    })
//
//
//
//});