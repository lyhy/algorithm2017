/**
 * @param {number[]} nums
 * @return {number}
 */
var findUnsortedSubarray = function(nums) {
    if(nums.length <= 1)return 0;
    //var first = 0, last = nums.length-1, min=nums[first], max = nums[last];
    var sortedArray = nums.slice();
    sortedArray = sortedArray.sort(function(a,b){return b-a > 0 ? -1 : b - a < 0 ? 1 : 0 });
    console.log(nums);
    console.log(sortedArray);
    var leftNotMatch = false, rightNotMatch = false;
     var i = 0, j = nums.length-1;

    var ret = nums.length;
    while(i < j){
        if(sortedArray[i] === nums[i] && !leftNotMatch){
            i++;
            ret--;
        }
        if(sortedArray[j] === nums[j] && !rightNotMatch){
            j--;
            ret--;
        }
        if(sortedArray[i] !== nums[i])leftNotMatch = true;
        if(sortedArray[j] !== nums[j])rightNotMatch = true;
        if(leftNotMatch && rightNotMatch)break;
    }

    if(i === j){
        if(!leftNotMatch && !rightNotMatch)return 0;
        else if((leftNotMatch || rightNotMatch) && sortedArray[i] === nums[i])ret--;
    }



    return ret;
};

module.exports = findUnsortedSubarray;

//var a =[2, 6, 4, 8, 10, 9, 15], val =5;
//var a =[1,2,3,5,4], val =2;
//var a =[1,3,2,4,5], val =2;
var a =[0,1,2,3,4,5,7,6,8,9], val =2;
console.log(findUnsortedSubarray(a))