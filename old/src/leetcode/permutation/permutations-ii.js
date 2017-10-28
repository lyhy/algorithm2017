//https://leetcode.com/problems/permutations-ii/
/**
 * @param {number[]} nums
 * @return {number[][]}
 */



var permuteUnique = function(nums) {
    var res = [];
    nums.sort(function(a, b){
        return a - b;
    });
    res.push(nums.slice());
    while(nextPermutation(nums)){
        res.push(nums.slice(0));
    }

    return res;

};

var nextPermutation = function(nums) {
    var len = nums.length;
    if(len <= 1)return false;
    //var p = len -1;
    for(var i = len-1; i >0; i-- ){
        if(nums[i] > nums[i-1])break;
    }

    if(i === 0){
        nums.reverse();

        return false;
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

    return true;

};

var swap = function(nums, index1, index2){
    var temp = nums[index1];
    nums[index1] = nums[index2];
    nums[index2] = temp;
};


var a = [1,2,3];
console.log(permuteUnique(a));