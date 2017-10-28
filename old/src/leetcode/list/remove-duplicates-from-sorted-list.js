//https://leetcode.com/problems/remove-duplicates-from-sorted-list/
function ListNode(val) {
    this.val = val;
    this.next = null;
}

/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var deleteDuplicates = function(head) {
    if(head===null || head.next===null)return head;
    var prev = head;
    var next = head.next;
    //var current = head.next;
    while(prev){
        next = prev.next;
        while(next && prev.val===next.val){
            prev.next = next.next;
            next = next.next;
        }
        prev = prev.next;
    }
    return head;
};

var head = new ListNode(1);
head.next = new ListNode(1);
head.next.next = new ListNode(1);
head.next.next.next = new ListNode(3);

console.log(deleteDuplicates(head));