/*

 Link:
 https://leetcode.com/problems/3sum-closest/

 Question:
 Given an array S of n integers, find three integers in S such that the sum is closest to a given number, target. Return the sum of the three integers. You may assume that each input would have exactly one solution.

 For example, given array S = {-1 2 1 -4}, and target = 1. The sum that is closest to the target is 2. (-1 + 2 + 1 = 2).

 Hints:
 Two pointers.
* */

function threeClosestSum(target, a){
    var sorted = a.sort();
    if(a.length<3)return null;
    var result = sorted[0] + sorted[1] + sorted[2];
    var tempSum;
    for(var i = 1, j, k, len = sorted.length; i<len-2; i++){
        j=i+1;
        k=len-1;
        while(j<k){
            tempSum = sorted[i] + sorted[k] + sorted[j];
            if(tempSum==target)return tempSum;

            if(Math.abs(result-target)>Math.abs(tempSum-target)){
                result = tempSum;
            }

            if(tempSum<target){
                j++;
            }else{
                k--;
            }

        }


    }
    return result;
}

module.exports = threeClosestSum;