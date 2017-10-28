//https://leetcode.com/problems/balanced-binary-tree/

/*
* Given a binary tree, determine if it is height-balanced.

 For this problem, a height-balanced binary tree is defined as a binary tree in which the depth of the two subtrees of every node never differ by more than 1.
* */

/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {boolean}
 */

function TreeNode(val) {
     this.val = val;
     this.left = this.right = null;
}

var isBalanced = function(root) {
    if(root===null)return true;

    var leftHeight = getDepth(root.left, 1);
    var rightHeight = getDepth(root.right, 1);
    if(Math.abs(leftHeight-rightHeight)>=2)return false;
    else{
        return isBalanced(root.left) && isBalanced(root.right)
    }
};

function getDepth(node, currentDepth){
    if(node===null){
        return currentDepth;
    }

    return Math.max(getDepth(node.left, currentDepth +1), getDepth(node.right, currentDepth +1));

}

var root = new TreeNode(0);
root.left = new TreeNode(1);
root.right = new TreeNode(2);

//testing
'use strict'
require('babel-core/register')
var Mocha = require('mocha');
var expect = require('chai').expect;
var mocha = new Mocha({ui: 'bdd'});
mocha.suite.emit('pre-require', this, 'solution', mocha);

describe("test", () => {
    it('it', function(){
        expect(isBalanced(root)).to.equal(true);
    })



});