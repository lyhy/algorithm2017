//https://leetcode.com/problems/binary-tree-inorder-traversal/

/*
* Given a binary tree, return the inorder traversal of its nodes' values.

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
    /*
var inorderTraversal = function(root) {
    var result = [];
    if(root===null)return [];
    result = result.concat(inorderTraversal(root.left), root.val, inorderTraversal(root.right));
    return result;
};*/
//iteratively
var inorderTraversal = function(root) {
    var result = [];
    var stack  = [];

    if(root === null)return [];
    while(true){
        if(root!==null){
            stack.push(root);
            root = root.left;
        }else{
            if(stack.length === 0)break;
            root = stack.pop();
            result.push(root.val);
            root = root.right;
        }
    }

    return result;
};

var root = new TreeNode(0);
root.right = new TreeNode(1);
root.right.left = new TreeNode(2);

//var a = inorderTraversal(root);

//testing
'use strict'
require('babel-core/register')
var Mocha = require('mocha');
var expect = require('chai').expect;
var mocha = new Mocha({ui: 'bdd'});
mocha.suite.emit('pre-require', this, 'solution', mocha);

describe("test", () => {
    it('it', function(){
        expect(inorderTraversal(root)).to.deep.equal([0,2,1]);
    })



});