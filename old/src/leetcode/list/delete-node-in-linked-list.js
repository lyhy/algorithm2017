//https://leetcode.com/problems/delete-node-in-a-linked-list/
/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} node
 * @return {void} Do not return anything, modify node in-place instead.
 */
function ListNode(val) {
    this.val = val;
    this.next = null;

}
var deleteNode = function(node) {
    if(node==null) return;
    node.val = node.next.val;
    node.next = node.next.next;
};

var root = new ListNode(1);
root.next = new ListNode(2);
root.next.next = new ListNode(3);
root.next.next.next = new ListNode(4);

//testing
/** TEST SUITE **/
//'use strict'
//require('babel-core/register')
//var Mocha = require('mocha');
//var expect = require('chai').expect;
//var mocha = new Mocha({ui: 'bdd'});
//mocha.suite.emit('pre-require', this, 'solution', mocha);
//
//describe("test", () => {
//    it('it', function(){
//        expect(deleteNode()).to.deep.equal('wjk');
//    })
//
//
//
//});