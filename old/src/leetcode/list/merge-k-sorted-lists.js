//https://leetcode.com/problems/merge-k-sorted-lists/
/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

 function ListNode(val) {
     this.val = val;
     this.next = null;
}
/**
 * @param {ListNode[]} lists
 * @return {ListNode}
 */
var mergeKLists = function(lists) {
    if(lists === null || lists.length === 0) return null;
    var len = lists.length;

    return partion(lists, 0, len-1);

};

var partion = function(lists, l, r){
    var m, l1, l2;
    if(l === r)return lists[l];

    if(l < r){
        m = Math.floor((r - l)/2) + l;

        l1 = partion(lists, l, m);
        l2 = partion(lists, m+1, r);

        return merge(l1, l2);
    }else{
        return null;
    }
}

var merge = function(l1, l2) {
    if (l1 === null)return l2;
    if (l2 === null)return l1;

    if(l1.val < l2.val){
        l1.next = merge(l1.next, l2);
        return l1;
    }else{
        l2.next = merge(l1, l2.next);
        return l2;
    }

}


//testing
var lists = [];

var head1 = new ListNode(1);
//head1.next = new ListNode(3);
//head1.next.next = new ListNode(4);
var head2 = new ListNode(2);
//head2.next = new ListNode(5);
//head2.next.next = new ListNode(6);
lists.push(null);
lists.push(head1);
//lists.push(null);
lists.push(head2);
//lists.push(null);
//var head1 = new ListNode(-1);
//var head2 = new ListNode(6);
//head1.next = new ListNode(5);
//head1.next.next = new ListNode(11);
//head2.next = new ListNode(10);
//lists.push(head1);
//lists.push(null);
//lists.push(head2);
//[[],[-1,5,11],[],[6,10]]

console.log(mergeKLists(lists));