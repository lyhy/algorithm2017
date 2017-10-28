//https://leetcode.com/problems/minimum-depth-of-binary-tree/

/*
 Given a binary tree, find its minimum depth.

 The minimum depth is the number of nodes along the shortest path from the root node down to the nearest leaf node.
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

var minDepth = function(root) {
    if(root===null)return 0;

    if(root.left === null && root.right === null)return 1;

    var leftHeight = minDepth(root.left);
    var rightHeight = minDepth(root.right);


    if(leftHeight === 0){
        return rightHeight + 1;
    }
    else if(rightHeight === 0){
        return leftHeight + 1;
    }else{
        return Math.min(leftHeight, rightHeight) + 1;
    }
};


var root = new TreeNode(0);
root.left = new TreeNode(1);
//root.right = new TreeNode(2);
//root.left.left = new TreeNode(3);

//testing
'use strict'
require('babel-core/register')
var Mocha = require('mocha');
var expect = require('chai').expect;
var mocha = new Mocha({ui: 'bdd'});
mocha.suite.emit('pre-require', this, 'solution', mocha);

describe("test", () => {
    it('it', function(){
        expect(minDepth(root)).to.equal(2);
    })



});