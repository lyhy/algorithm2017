/**
 * @param {number[][]} matrix
 * @param {number} target
 * @return {boolean}
 */
var searchMatrix = function(matrix, target) {
    if(!matrix || !matrix.length)return false;
    var ret = false;
    var cLen = matrix.length, rLen = matrix[0].length;
    var start = 0, end = cLen * rLen;
    var mid, value;
    while(start < end){
        mid = Math.floor((start+end)/2);
        value = matrix[Math.floor(mid/rLen)][mid%rLen];
        if(value === target) return true;
        else if(value < target)start = mid + 1;
        else end = mid;
    }
    return ret;
};

module.exports = searchMatrix;