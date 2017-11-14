/**
 * @param {number[]} nums
 */
var Solution = function(nums) {
    var ret = [];
    permutationDFS(nums, 0, ret);
    this.permutations = ret;
};

var permutationDFS = function(nums, start, ret) {
    if(start >= nums.length) ret.push(nums.slice());
    for(var i = start, len = nums.length; i < len; i++) {
        swap(nums, start, i);
        permutationDFS(nums, start + 1, ret);
        swap(nums, start, i);
    }
}

var swap = function(nums, i, j) {
    var temp = nums[i];
    nums[i] = nums[j];
    nums[j] = temp;
}

/**
 * Resets the array to its original configuration and return it.
 * @return {number[]}
 */
Solution.prototype.reset = function() {
    return this.permutations[0];
};

/**
 * Returns a random shuffling of the array.
 * @return {number[]}
 */
Solution.prototype.shuffle = function() {
    let min = 0, max = this.permutations.length;
    var random = Math.floor(Math.random() * (max - min)) + min;
    return this.permutations[random];
};

/** 
 * Your Solution object will be instantiated and called as such:
 * var obj = Object.create(Solution).createNew(nums)
 * var param_1 = obj.reset()
 * var param_2 = obj.shuffle()
 */
var nums = [1,2,3]
var obj = new Solution(nums);
console.log(obj.permutations);
console.log(obj.reset());
console.log(obj.shuffle());


/**
 * Time exceed
 * Last executed input:
 ["Solution","shuffle"]
 [[[1,2,3,4,5,6,7,8,9,10,11,12]],[]]
 */