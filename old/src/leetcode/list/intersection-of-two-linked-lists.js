//https://leetcode.com/problems/intersection-of-two-linked-lists/
/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
（3） 双指针法 ，指针pa、pb分别指向链表A和B的首节点。

遍历链表A，记录其长度lengthA，遍历链表B，记录其长度lengthB。

因为两个链表的长度可能不相同，比如题目所给的case，lengthA=5，lengthB=6，则作差得到 lengthB- lengthA=1，将指针pb从链表B的首节点开始走1步，即指向了第二个节点，pa指向链表A首节点，然后它们同时走，每次都走一步，当它们相等时，就是交集的节点。

时间复杂度O(lengthA+lengthB)，空间复杂度O(1)。双指针法的代码如下：

3、代码

ListNode *getIntersectionNode(ListNode *headA, ListNode *headB) {
    ListNode *pa=headA,*pb=headB;
    int lengthA=0,lengthB=0;
    while(pa) {pa=pa->next;lengthA++;}
    while(pb) {pb=pb->next;lengthB++;}
    if(lengthA<=lengthB){
        int n=lengthB-lengthA;
        pa=headA;pb=headB;
        while(n) {pb=pb->next;n--;}
    }else{
        int n=lengthA-lengthB;
        pa=headA;pb=headB;
        while(n) {pa=pa->next;n--;}
    }
    while(pa!=pb){
        pa=pa->next;
        pb=pb->next;
    }
    return pa;
}
function ListNode(val) {
    this.val = val;
    this.next = null;

}

/**
 * @param {ListNode} headA
 * @param {ListNode} headB
 * @return {ListNode}
 */
var getIntersectionNode = function(headA, headB) {
    if(headA===null || headB===null)return null
    var p1 = headA;
    var p2 = headB;
    var p3 = null;

    while(p1){


    }

    if(p1.next || p2.next){
        return null;
    }

    return p3;
};

var list1 = new ListNode(1);
list1.next = new ListNode(2);
list1.next.next = new ListNode(3);
var list2 = new ListNode(4);
list2.next = new ListNode(2);
list2.next.next = new ListNode(3);

console.log(getIntersectionNode(list1, list2));//2,3