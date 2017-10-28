//https://leetcode.com/problems/n-queens/
/**
 * @param {number} n
 * @return {string[][]}
 */
var solveNQueens = function(n) {
    var board = [];
    var sol = [];

    solveNQueen(n, 0, sol, board);

    return board;



};

var solveNQueen = function(n, row, sol, board){
    var str = '';
    if(row === n){
        board.push(sol.slice(0));
    }

    for(var i = 0;i<n;i++){
        str = '';
        for(var j=0;j<n;j++){
            str += j === i? 'Q':'.';
        }
        sol.push(str);

        if(isValid(sol, row, i)){
            solveNQueen(n, row+1, sol, board);
        }
        sol.pop();
    }

};

var isValid = function(sol, row, col){
    var count = 0,i,j;

    //column
    for(i=0;i<=row; i++){
        if(subRow[i][col] == 'Q')count++;
        if(count >1)return false;
    }
    count = 0;
    //right diagnal
    for(i=row, j=col; i>=0 && j>=0; i--,j--){
        if(subRow[i][j] == 'Q')count++;
        if(count > 1)return false;
    }
    count = 0;
    //left diagnal
    for(i=row, j=col; i>=0 && j<subRow[0].length; i--,j++){
        if(subRow[i][j] == 'Q')count++;
        if(count > 1)return false;
    }
    return true;
};

console.log(solveNQueens(8));