//https://leetcode.com/problems/maximum-depth-of-binary-tree/

/*
 Given a binary tree, find its maximum depth.

 The maximum depth is the number of nodes along the longest path from the root node down to the farthest leaf node.
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

var maxDepth = function(root) {
    if(root===null)return 0;

    var leftHeight = getDepth(root.left, 1);
    var rightHeight = getDepth(root.right, 1);
    return Math.max(leftHeight, rightHeight);
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
        expect(maxDepth(root)).to.equal(2);
    })



});