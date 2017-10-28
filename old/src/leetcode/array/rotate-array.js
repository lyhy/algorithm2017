//https://leetcode.com/problems/rotate-array/
//For example, with n = 7 and k = 3, the array [1,2,3,4,5,6,7] is rotated to [5,6,7,1,2,3,4].
/**
 * @param {number[]} nums
 * @param {number} k
 * @return {void} Do not return anything, modify nums in-place instead.
 */
//var rotate = function(nums, k) {
//    var len = nums.length;
//    if(len === 0)return [];
//    if(k=== 0)return nums;
//    return nums.map(function(item, index){
//        if(index < k){
//            return nums[len - k + index];
//        }else{
//            return nums[index - k];
//        }
//    });
//};

var inplaceReversal = function(nums, start, end){
    var l = start, r = end-1, temp;//include end index
    while(l<r && start >= 0 && end <= nums.length){
        temp = nums[r];
        nums[r] = nums[l];
        nums[l] = temp;
        l++;
        r--;
    }
};

var rotate = function(nums, k) {
    var len = nums.length;
    if(k>len)k=k%len;
    inplaceReversal(nums, 0, len - k);
    inplaceReversal(nums, len - k, len);
    inplaceReversal(nums, 0, len);
};



//var a = [1,2,3,4,5,6,7];
var a = [1,2,3];
var k = 4;
rotate(a,k);
//inplaceReversal(a);
console.log(a);