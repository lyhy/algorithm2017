/**
 * @param {number[]} nums
 * @return {number}
 */
var arrayPairSum = function(nums) {
    var ret = 0;
    nums.sort(function(a,b){
        return b > a ? -1 : b < a ? 1 : 0;
    });
    if(Array.isArray(nums) && nums.length){
        for(var i = 0,len = nums.length; i < len; i+=2){
            ret += nums[i];
        }
    }
    return ret;
    
};

var input = [6214, -2290, 2833, -7908], output = -5075;
//var input = [1,4,3,2], output = 4;
console.log(arrayPairSum(input))