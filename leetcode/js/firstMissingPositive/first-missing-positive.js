/**
 * @param {number[]} nums
 * @return {number}
 */
var firstMissingPositive = function(nums) {
    if(!nums || !nums.length)return 1;

    bucketSort(nums);
    console.log(nums);
    for(var i = 0, len = nums.length; i < len; ++i){
        if(nums[i] !== i + 1)return i +1;
    }

    return len + 1;
};

function bucketSort(nums) {
    for(var i = 0, len = nums.length; i < len; i++){
        while(nums[i] !== i +1){
            if(nums[i] <= 0 || nums[i] > len || nums[i] == nums[nums[i] -1])break;
            swap(nums, i, nums[i] -1);
        }
    }
}

function swap(nums, indexA, indexB) {
    temp = nums[indexA];
    nums[indexA] = nums[indexB];
    nums[indexB] = temp;
}

var input = [3,4,-1,1], output = 2;
var ret = firstMissingPositive(input);
console.log(ret);

module.exports = firstMissingPositive;