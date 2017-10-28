//https://leetcode.com/problems/remove-element/
/**
 * @param {number[]} nums
 * @param {number} val
 * @return {number}
 */
var removeElement = function(nums, val) {
    var len = nums.length, temp;
    for(var i = 0; i < len; i++){
        if(nums[i] === val){
            nums[i] = nums[len -1];
            len--;
            i--;
        }
    }
    return len;

};

//class Solution {
//    public:
//        int removeElement(int A[], int n, int elem) {
//    for(int i = 0; i < n; i++){
//    if(A[i] == elem){
//    swap(A[i],A[n-1]);
//    n--;
//    i--;
//}
//}
//return n;
//}
//};



console.log(removeElement([1,4,2,6,3,2],2));//[1,4,6,3]
console.log(removeElement([3,3],5));//[1,4,6,3]