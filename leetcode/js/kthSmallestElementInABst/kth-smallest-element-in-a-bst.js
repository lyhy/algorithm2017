/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @param {number} k
 * @return {number}
 */
var kthSmallest = function(root, k) {
    var st = [root], top, rt;
    while(root){
        st.push(root);
        root = root.left;
    }

    while(k){
        top = st.pop();
        k--;
        if(k === 0)return top.val;
        rt = top.right;
        while(rt){
            st.push(rt);
            rt = rt.left;
        }

    }

    return -1;
};

 function TreeNode(val) {
     this.val = val;
     this.left = this.right = null;
 }

var n1 = new TreeNode(1);
var n2 = new TreeNode(2);
var n3 = new TreeNode(3);
var n4 = new TreeNode(4);
var n5 = new TreeNode(5);

n3.left = n1;
n1.right = n2;
n3.right = n4;
n4.right = n5;

console.log(kthSmallest(n3, 2));