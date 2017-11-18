hasRect = function(matrix){
    if(matrix.length < 2)return false;
    var colSize = matrix.length;
    var rowSize = matrix[0].length;
    var ret = false, rowBArray = [], columnBArray = [], i,j, bitRet;
    for(i = 0; i < colSize; i++){
        var bArray = matrix[i].reduce(function(a, b){
            return a + b;
        },'');
        rowBArray.push(bArray);
        console.log(bArray);
    }

    for(i = 0; i < rowBArray.length -1; i++){
        for(j = i+1; j < rowBArray.length; j++){
            bitRet = parseInt(rowBArray[i], 2) & parseInt(rowBArray[j], 2);
            if(bitRet && bitRet.toString(2).match(/1/g).length > 1 ){
                return true;
            }
        }
    }

    return ret;
}

var matrix = [
    [1, 0, 0, 1, 0],
    [0, 0, 1, 0, 1],
    [0, 0, 0, 1, 0],
    [1, 0, 1, 0, 1]
];

console.log(hasRect(matrix));