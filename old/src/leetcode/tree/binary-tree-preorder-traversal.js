//https://leetcode.com/problems/binary-tree-preorder-traversal/

/*
 * Given a binary tree, return the preorder traversal of its nodes' values.

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
/**
 * @param {TreeNode} root
 * @return {number[]}
 */
//recursive

 //var preorderTraversal = function(root) {
 //var result = [];
 //if(root===null)return [];
 //result = result.concat(root.val, preorderTraversal(root.left), preorderTraversal(root.right));
 //return result;
 //};
//iteratively
var preorderTraversal = function(root) {
    var result = [];
    var stack  = [];
    var top;

    if(root === null)return [];
    stack.push(root);
    while(stack.length>0){
        top = stack.pop();
        result.push(top.val);
        if(top.right!==null){
            stack.push(top.right);
        }
        if(top.left !== null){
            stack.push(top.left);
        }
    }

    return result;
};

var root = new TreeNode(0);
root.left = new TreeNode(1);
root.right = new TreeNode(2);

//preorderTraversal(root);


//testing
'use strict'
require('babel-core/register')
var Mocha = require('mocha');
var expect = require('chai').expect;
var mocha = new Mocha({ui: 'bdd'});
mocha.suite.emit('pre-require', this, 'solution', mocha);

describe("test", () => {
    it('it', function(){
        expect(preorderTraversal(root)).to.deep.equal([0,1,2]);
    })
});