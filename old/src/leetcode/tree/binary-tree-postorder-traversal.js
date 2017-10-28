//https://leetcode.com/problems/binary-tree-postorder-traversal/

/*
 * Given a binary tree, return the postorder traversal of its nodes' values.

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

 //var postorderTraversal = function(root) {
 //var result = [];
 //if(root===null)return [];
 //result = result.concat(postorderTraversal(root.left), postorderTraversal(root.right), root.val);
 //return result;
 //};
//iteratively
var postorderTraversal = function(root) {
    var result = [];
    var stack  = [];
    var prev=null,cur;

    if(root === null)return [];
    stack.push(root);
    while(stack.length>0){
        cur = stack[stack.length-1];
        if((cur.left === null && cur.right === null)
        || (prev!== null && (cur.left === prev || cur.right === prev))){
            stack.pop();
            result.push(cur.val);
            prev = cur;

        }else{
            if(cur.right!==null)stack.push(cur.right);
            if(cur.left!==null)stack.push(cur.left);
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
        expect(postorderTraversal(root)).to.deep.equal([2,1,0]);
    })



});