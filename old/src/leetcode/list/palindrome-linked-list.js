//https://leetcode.com/problems/palindrome-linked-list/
function ListNode(val) {
    this.val = val;
    this.next = null;
}/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @return {boolean}
 */
var isPalindrome = function(head) {
    if(head === null)return true;
    if(head.next === null)return true;

    var p1, p2, p2prev,p2nextnext, p2next, len = 0, halfStart, count = 0;
    p1 = head;
    p2 = head;
    //half split
    while(p2){
        p1 = p1.next;
        if(p2.next === null) {
            len++;
            break;
        }else{
            p2 = p2.next.next;
            len +=2;
        }
    }

    if(len%2 === 0){
        halfStart = len/2;
    }else{
        halfStart = (len+1)/2;
    }
    p2 = head;
    while(count < halfStart){
        p2 = p2.next;
        count++;
    }

    //reverse the end half;

    p2prev = p2;
    p2next = p2.next;
    p2prev.next = null;

    while(p2next){
        p2nextnext = p2next.next;
        p2next.next = p2prev;
        p2prev = p2next;
        p2next = p2nextnext;
    }
    p2 = p2prev;
    p1 = head;

    //compare
    while(p2){
        if(p1.val !== p2.val)return false;
        p1 = p1.next;
        p2 = p2.next;
    }

    return true;

};

var head = new ListNode(1);
head.next = new ListNode(2);
//head.next.next = new ListNode(3);
//head.next.next.next = new ListNode(2);
//head.next.next.next.next = new ListNode(1);

console.log(isPalindrome(head));//true;