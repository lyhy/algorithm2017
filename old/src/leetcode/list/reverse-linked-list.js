//https://leetcode.com/problems/reverse-linked-list/
function ListNode(val) {
    this.val = val;
    this.next = null;
}
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var reverseList = function(head) {
    if(head===null || head.next === null)return head;

    var prev = head;
    var next = head.next;
    var nextnext;
    prev.next = null;

    while(next){
        nextnext = next.next;
        next.next = prev;
        prev = next;
        next = nextnext;
    }

    return prev;
};

var head = new ListNode(1);
head.next = new ListNode(2);
head.next.next = new ListNode(3);

console.log(reverseList(head));

