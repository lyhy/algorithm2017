/**
 * @param {number[][]} dungeon
 * @return {number}
 */
var calculateMinimumHP = function(dungeon) {
    var M = dungeon.length;
    var N = dungeon[0].length;

    var hp = new Array(M + 1).fill([]);
    for(var row = 0; row <=M; row++){
        hp[row] = new Array(N +1).fill(Number.MAX_SAFE_INTEGER)
    }

    console.log(hp)
    hp[M][N-1] = 1;
    hp[M-1][N] = 1;

    for(var i = M -1; i >=0; i--){
        for(var j = N -1; j >=0; j--){
            var need = Math.min(hp[i+1][j], hp[i][j+1]) - dungeon[i][j];
            hp[i][j] = Math.max(1, need);
        }
    }

    return hp[0][0];
};

var dungeon = [
    [-2, -3,3],
    [-5, -10,1],
    [10, 30,-5]
];
//expect = 7
console.log(calculateMinimumHP(dungeon));