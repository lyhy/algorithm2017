var depthSum = function(arr){
    var result =  helpFun(arr, 1);
    console.log(result);
}

var helpFun = function(arr, depth) {
    if(!arr || (Array.isArray(arr) && !arr.length))return 0;

    var total = 0;
    for(var i = 0, len = arr.length; i < len; i++){
        if(typeof arr[i] === 'number')total += depth * arr[i];
        else
            total += helpFun(arr[i], depth+1);
    }

    return total;
}

var input = [[1,1],2,[1,1]];
var output = 10;
depthSum(input)
module.exports = depthSum;