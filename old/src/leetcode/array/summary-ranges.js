//https://leetcode.com/problems/summary-ranges/
/**
 * @param {number[]} nums
 * @return {string[]}
 */
var summaryRanges = function(nums) {
    var result = [];
    if(nums.length === 0)return [];

    var start = nums[0];
    var next, prev = nums[0];

    for(var i = 1; i < nums.length; i++){
        next = nums[i];
        if(next - prev === 1){
            prev = nums[i];
        }else{
            if(start === prev){
                result.push(start.toString());
            }else{
                result.push(start + '->' + prev);
            }
            start = nums[i];
            prev = nums[i];
        }
    }

    if(start === prev){
        result.push(start.toString());
    }else{
        result.push(start + '->' + prev);
    }


    return result;


};

console.log(summaryRanges([0,1,2,4,5,7]));//["0->2","4->5","7"]
//public class Solution {
//    // [0,1,2,4,5,7], return ["0->2","4->5","7"].
//    public List<String> summaryRanges(int[] nums) {
//    List<String> res = new ArrayList<>();
//    if(nums==null || nums.length<1) return  res;
//
//    int s=0, e=0;
//    while(e<nums.length) {
//    if(e+1<nums.length && nums[e+1]==nums[e]+1) {
//    e++;
//} else {
//    if(s==e) {
//        res.add(Integer.toString(nums[s]));
//    } else {
//        String str = nums[s] + "->" + nums[e];
//        res.add(str);
//    }
//    ++e;
//    s = e;
//}
//}
//return res;
//}
//}
//}