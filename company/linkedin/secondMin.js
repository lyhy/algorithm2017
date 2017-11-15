/**
 * A tournament tree is a binary tree
 * where the parent is the minimum of the two children.
 * Given a tournament tree find the second minimum value in the tree.
 * A node in the tree will always have 2 or 0 children.
 * Also all leaves will have distinct and unique values.
 * 2
 * / \
 * 2 3
 * / \ | \
 * 4 2 5 3
 *
 * In this given tree the answer is 3.
 */

//
//class Node {
//    Integer value;
//    Node left, right;
//    Node(Integer value, Node left, Node right) {
//    this.value = value;
//    this.left = left;
//    this.right = right;
//}
//}
//class Solution {
//    /**
//     * This should return the second minimum
//     * int value in the given tournament tree
//     */
//    public static Integer secondMin(Node root) {
//
//}
//}
//
//class TournamentTree {
//    /**
//     * This should return the second minimum
//     * int value in the given tournament tree
//     */
//    public static Integer secondMin(Node root) {
//    if(root.left == null && root.right == null) {
//    return Integer.MAX_VALUE;
//}
//Node node;
//int min;
//if(root.left.value == root.value) {
//    node = root.left;
//    min = root.right.value;
//} else {
//    node = root.right;
//    min = root.left.value;
//}
//return Math.min(min, secondMin(node));
//}
//}

/**
 *
 ** 2
 * / \
 * 2 3
 * / \ | \
 * 4 2 5 3
 *
 * In this given tree the answer is 3.
 */
var Node = function(value, left, right) {
    this.value = value;
    this.left = left;
    this.right = right;
}
var secondMin = function(node) {
    var min = node.value;
    var min2 = Number.MAX_VALUE;
    var q = [node];

    while(q.length){
        var top = q.shift();
        if(top.value > min){
            min2 = Math.min(min2, top.value);
        }

        if(top.left){
            q.push(top.left);
            q.push(top.right);
        }
    }

    return min2;


}

var leaf1 = new Node(4,null, null);
var leaf2 = new Node(2,null, null);
var leaf3 = new Node(5,null, null);
var leaf4 = new Node(3,null, null);

var lay1_1 = new Node(2,leaf1, leaf2);
var lay1_2 = new Node(3,leaf3, leaf4);

var root = new Node(2, lay1_1, lay1_2);

console.log(secondMin(root));






