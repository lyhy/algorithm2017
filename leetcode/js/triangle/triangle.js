/**
 * @param {number[][]} triangle
 * @return {number}
 */
var minimumTotal = function(triangle) {
    if(!triangle)return 0;
    var m = triangle.length, n = triangle[0].length || 0;
    //var c = new Array(m).fill(Number.MAX_VALUE);
    c = triangle[m-1];

    for(var layer = m-2; layer >= 0; layer--){
        for(var i = 0; i <= layer; i++){
            c[i] = Math.min(c[i], c[i+1])+triangle[layer][i];

        }
    }

    return c[0];
};

var a = [
    [2],
    [3,4],
    [6,5,7],
    [4,1,8,3]
], output = 11;

console.log(minimumTotal((a)));