//https://leetcode.com/problems/pascals-triangle-ii/

/**
 * @param {number} rowIndex
 * @return {number[]}
 */
var getRow = function(rowIndex) {
    var prevLevel = [];
    var currentLevel = [];
    var num;

    for(var i = 0; i <=rowIndex; i++) {
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
    }

    return currentLevel;

};

console.log(getRow(3));
