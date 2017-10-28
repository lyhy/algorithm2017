//https://leetcode.com/problems/next-permutation/

/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var nextPermutation = function(nums) {
    var len = nums.length;
    if(len <= 1)return;
    //var p = len -1;
    for(var i = len-1; i >0; i-- ){
        if(nums[i] > nums[i-1])break;
    }

    if(i === 0){
        nums.reverse();

        return;
    }


    var first = nums[i-1];
    var min = nums[i], minIndex = i;

    for(var j = i +1; j<nums.length; j++){
        if(nums[j] > first && nums[j] < min){
            minIndex = j;
            min = nums[j];
        }
    }
    swap(nums, i-1, minIndex);
    var subNums = nums.slice(i);
    subNums.sort(function(a,b){
        return a - b;
    });

    nums.splice(i ,len-i+1);
    subNums.forEach(function(item){
        nums.push(item);
    });

};

var swap = function(nums, index1, index2){
  var temp = nums[index1];
    nums[index1] = nums[index2];
    nums[index2] = temp;
};


/*
* 1,2,3 → 1,3,2
 3,2,1 → 1,2,3
 1,1,5 → 1,5,1
* */
//var a=[1,2,3,4,5];
//var a=[1,1];
//var a=[1];
//var a=[1,3,2];
var a=[3,2,1];
nextPermutation(a);
console.log(a);