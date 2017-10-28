//https://leetc2ode.com/problems/binary-tree-level-order-traversal/

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
 var levelOrder = function(root) {
    var result = [];
    var levelArr = [];
    var queue = [];
    var first;
    var currentCount = 0;
    var prevCount = 1;

    if(root===null)return [];
    queue.push(root);
    while(queue.length>0){
        levelArr = [];
        currentCount = 0
        while(prevCount>0) {
            first = queue.shift();
            prevCount--;
            //if (first === null)continue;
            levelArr.push(first.val);
            if (first.left !== null){
                queue.push(first.left);
                currentCount++;
            }
            if (first.right !== null){
                queue.push(first.right);
                currentCount++;
            }
        }

        prevCount=currentCount;

        result.push(levelArr);

    }

    return result;
 };
//iteratively


//var root = new TreeNode(0);
//root.right = new TreeNode(1);
//root.right.left = new TreeNode(2);

//var a = inorderTraversal(root);
var root = new TreeNode(1);
root.left = new TreeNode(2);
root.right = new TreeNode(3);
root.left.left = new TreeNode(4);
root.right.right = new TreeNode(5);

//levelOrder(root);

//testing
'use strict'
require('babel-core/register')
var Mocha = require('mocha');
var expect = require('chai').expect;
var mocha = new Mocha({ui: 'bdd'});
mocha.suite.emit('pre-require', this, 'solution', mocha);

describe("test", () => {
    it('it', function(){
        expect(levelOrder(root)).to.deep.equal([[1],[2,3],[4,5]]);
    })



});