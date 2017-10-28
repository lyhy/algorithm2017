//https://leetcode.com/problems/invert-binary-tree/
/**
 * Definition for a binary tree node.

 */
/**
 * @param {TreeNode} root
 * @return {TreeNode}
 */

function TreeNode(val) {
    this.val = val;
    this.left = this.right = null;
}


var invertTree = function(root) {
    if(root===null)return null;
    var left = root.left;
    var right = root.right;
    root.left = invertTree(right);
    root.right = invertTree(left);

    return root;
};

var root = new TreeNode(4);
root.left = new TreeNode(2);
root.right = new TreeNode(7);
root.left.left = new TreeNode(1);
root.left.right = new TreeNode(3);

root.right.left = new TreeNode(6);
root.right.right = new TreeNode(9);

var a = invertTree(root);
console.log(a);

//preorderTraversal(root);


////testing
//'use strict'
//require('babel-core/register')
//var Mocha = require('mocha');
//var expect = require('chai').expect;
//var mocha = new Mocha({ui: 'bdd'});
//mocha.suite.emit('pre-require', this, 'solution', mocha);
//
//describe("test", () => {
//    it('it', function(){
//        expect(invertTree(root)).to.deep.equal([0,1,2]);
//    })
//});