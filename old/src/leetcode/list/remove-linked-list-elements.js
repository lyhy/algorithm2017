//https://leetcode.com/problems/remove-linked-list-elements/

/**
 * @param {ListNode} node
 * @return {void} Do not return anything, modify node in-place instead.
 */
function ListNode(val) {
    this.val = val;
    this.next = null;

}
/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} val
 * @return {ListNode}
 */
var removeElements = function(head, val) {
    if(head === null)return head;

    while(head && head.val === val){
        head = head.next;
    }
    if(head === null)return head;
    var p = head;
    var next = p.next;
    while(p){
        next = p.next;
        if(next === null){
            if(p.val === val){

            }
            break;
        }
        if(next.val === val){
            p.next = next.next;
        }else{
            p = p.next;
        }
    }

    return head;
};
/*
var head = new ListNode(1);
head.next = new ListNode(2);
head.next.next = new ListNode(6);
head.next.next.next = new ListNode(3);
head.next.next.next.next = new ListNode(4);
head.next.next.next.next.next = new ListNode(5);
head.next.next.next.next.next.next = new ListNode(6);
*/
var head = new ListNode(1);
head.next = new ListNode(1);
console.log(removeElements(head, 1));