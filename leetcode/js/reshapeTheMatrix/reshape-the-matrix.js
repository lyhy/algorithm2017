/**
 * @param {number[][]} nums
 * @param {number} r
 * @param {number} c
 * @return {number[][]}
 */
var matrixReshape = function(nums, r, c) {
    var m = nums.length, n = nums[0].length;
    if(m * n < r * c) return nums;
    var ret =  new Array(r);
    for(var j = 0; j < r; j++){
        ret[j] = new Array(c);
    }

    for(var i = 0; i < m * n; i++){
        ret[Math.floor(i/c)][i%c] = nums[Math.floor(i/n)][i%n];
    }

    return ret;
};

var nums = [[1,2],
        [3,4]],
r = 1, c = 4;
//var nums = [[1,2,3,4]], r = 2, c = 2;
//var nums = [[1,2,3,4]], r = 1, c = 4;




console.log(matrixReshape(nums, r, c));