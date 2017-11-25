/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var addTwoNumbers = function(l1, l2) {
    var root = new ListNode();
    var pointer = root;
    var cur;
    var prev = 0;
    while(l1 && l2){
        var val = l1.val + l2.val + prev;
        prev = val >= 10 ? 1 : 0;
        val = val >= 10 ? val - 10: val;
        cur = new ListNode(val);
        pointer.next = cur;
        pointer = pointer.next;
        l1 = l1.next;
        l2 = l2.next;
    }

    while(l1){
        var val = l1.val + prev;
        prev = val >= 10 ? 1 : 0;
        val = val >= 10 ? val - 10: val;
        cur = new ListNode(val);
        pointer.next = cur;
        pointer = pointer.next;
        l1 = l1.next;
    }

    while(l2){
        var val = l2.val + prev;
        prev = val >= 10 ? 1 : 0;
        val = val >= 10 ? val - 10: val;
        cur = new ListNode(val);
        pointer.next = cur;
        pointer = pointer.next;
        l2 = l2.next;
    }

    if(prev){
        cur = new ListNode(prev);
        pointer.next = cur;
    }



    return root.next;
};

function ListNode(val) {
     this.val = val;
     this.next = null;
}
////Input: (2 -> 4 -> 3) + (5 -> 6 -> 4)
////Output: 7 -> 0 -> 8
//var n1 = new ListNode(2);
//var n2 = new ListNode(4);
//var n3 = new ListNode(3);
//var n4 = new ListNode(5);
//var n5 = new ListNode(6);
//var n6 = new ListNode(4);
//n1.next = n2;
//n2.next = n3;
//
//n4.next = n5;
//n5.next = n6;

//input 5,5, output = 0,1
var n1 = new ListNode(5);
var n2 = new ListNode(5);


module.exports = addTwoNumbers;
//var a = addTwoNumbers(n1, n4)
var a = addTwoNumbers(n1, n2)
while(a){
    console.log(a.val);
    a = a.next;
}