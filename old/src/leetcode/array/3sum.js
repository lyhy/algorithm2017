//https://leetcode.com/problems/3sum/

/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var threeSum = function(nums) {
    nums.sort(function(a, b){
        return a -b;
    });
    var l =  0, r = nums.length-1, result = [], subA = [], resultMap = {};

    for(var i = 0; i < nums.length; i++){
        subA = [];
        l = 0;
        r = nums.length - 1;
        while(l<r){
            if(l === i ){
                l++;
                continue;
            }
            if(r === i ){
                r--;
                continue;
            }
            if(nums[l] + nums[r] + nums[i] === 0){
                subA = [];
                subA.push(nums[i]);
                subA.push(nums[l]);
                subA.push(nums[r]);
                subA.sort(function(a, b){
                    return a - b;
                });
                if(!resultMap[subA.join('')]){
                    resultMap[subA.join('')] = true;
                    result.push(subA);
                }
                l++;
                r--;
            }else if(nums[l] + nums[r] + nums[i] < 0){
                l++;
            }else{
                r--;
            }
        }
    }

    return result;
};
/*
*For example, given array S = {-1 0 1 2 -1 -4},

 A solution set is:
 (-1, 0, 1)
 (-1, -1, 2)
 target = 0
* */
//var s = [-1, 0, 1, 2, -1, -4];
//var s = [-2, 0, 1, 1, 2];
var s = [-4,-2,-2,-2,0,1,2,2,2,3,3,4,4,6,6];
console.log(threeSum(s));