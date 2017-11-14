/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var permute = function(nums) {
    var ret = [];

    permDFS(nums, 0, ret)

    return ret;

};

var permDFS = function(nums, start, ret) {
    if(start >= nums.length)ret.push(nums.slice());
    for(var i = start, len = nums.length; i < len; i++){
        swap(nums, start, i);
        permDFS(nums, start + 1, ret);
        swap(nums, start, i);

    }
}

var swap = function(nums, i, j){
    var temp = nums[i];
    nums[i] = nums[j];
    nums[j] = temp;
}


var input = [1,2,3],
    output = [
        [1,2,3],
        [1,3,2],
        [2,1,3],
        [2,3,1],
        [3,1,2],
        [3,2,1]
    ];

console.log(permute(input))

module.exports = permute;