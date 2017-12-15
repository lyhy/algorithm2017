var isWordSquare = function(arr) {
    var rowN, colN, ret = true;
    if(!arr)return false;
    rowN = arr.length;
    colN = rowN ? arr[0].length : 0;
    if(!rowN || !rowN)return true;
    if(rowN && rowN !== colN)return false;
    outerloop:
    for(var i = 0; i < rowN; i++){
        for(var j = i + 1; j < colN; j++){
            if(arr[i][j]!==arr[j][i]){
                ret = false;
                break outerloop;
            }
        }
    }

    return ret;
}


var arr = [
    ['a','a','l','l'],
    ['a','a','e','r'],
    ['l','e','l','p'],
    ['l','r','p','l']
];

console.log(isWordSquare(arr));


