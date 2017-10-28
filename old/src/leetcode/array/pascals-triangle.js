//https://leetcode.com/problems/pascals-triangle/

/**
 * @param {number} numRows
 * @return {number[][]}
 */
var generate = function(numRows) {
    var result = [];
    var prevLevel = [];
    var currentLevel = [];
    var num;

    for(var i = 0; i < numRows; i++) {
        currentLevel = [];
        for(var j = 0; j <= i; j++) {
            if(j===0 || j===i){
                currentLevel.push(1);
            }else{
                num = prevLevel[j-1] + prevLevel[j];
                currentLevel.push(num);
            }
        }

        prevLevel = currentLevel;

        result.push(currentLevel);
    }

    return result;
};

console.log(generate(5));
