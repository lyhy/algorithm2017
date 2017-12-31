/**
 * @param {number[][]} grid
 * @return {number}
 */
var islandPerimeter = function(grid) {
    if(!grid || !grid.length)return 0;
    var box = 0, nb = 0, m = grid.length, n = grid[0].length || 0;

    for(var i = 0; i < m; i++){
        for(var j = 0; j < n; j++){
            if(grid[i][j]){
                box++;
                if(i > 0 && grid[i - 1][j])nb++;
                if(i < m-1 && grid[i + 1][j])nb++;
                if(j > 0 && grid[i][j-1])nb++;
                if(j < n -1 && grid[i][j +1])nb++;
            }
        }


    }

    return box*4 -nb;
};


var a = [[0,1,0,0],
    [1,1,1,0],
    [0,1,0,0],
    [1,1,0,0]], output = 16;

console.log(islandPerimeter(a));