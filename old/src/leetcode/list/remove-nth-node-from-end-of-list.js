//https://leetcode.com/problems/remove-nth-node-from-end-of-list/
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
 * @param {number} n
 * @return {ListNode}
 */
var removeNthFromEnd = function(head, n) {
    if(head === null)return head;
    var p = head;
    var q = head;
    var preP = null;
    for(var i = 0; i < n -1; i++){
        q = q.next;
    }
    while(q.next){
        preP = p;
        p = p.next;
        q = q.next;
    }
    if(preP === null){
        head = head.next;
    }else{
        preP.next = p.next;
    }

    return head;
};

//1->2->3->4->5, and n = 2.
//result  1->2->3->5

var head = new ListNode(1);
head.next = new ListNode(2);
head.next.next = new ListNode(3);
head.next.next.next = new ListNode(4);
head.next.next.next.next = new ListNode(5);

console.log(removeNthFromEnd(head, 2));