/**
 * @param {number[][]} matrix
 * @param {number} target
 * @return {boolean}
 */
var searchMatrix = function(matrix, target) {
    if(!matrix || !matrix.length)return false;

    var ret = false;
    var rLen = matrix.length, cLen = matrix[0].length;
    var rNum = rLen -1, cNum = 0, value;
    while(rNum >=0 && cNum < cLen){
        value = matrix[rNum][cNum];
        if(value === target)return true;
        else if(value < target)cNum++;
        else rNum--;
    }
    return ret;
};

module.exports = searchMatrix;

var input = [
    [1,   4,  7, 11, 15],
    [2,   5,  8, 12, 19],
    [3,   6,  9, 16, 22],
    [10, 13, 14, 17, 24],
    [18, 21, 23, 26, 30]
];
var target = 5, output = true;

searchMatrix(input, target);