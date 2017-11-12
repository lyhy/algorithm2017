//var depthSum = function(arr){
//    var result =  helpFun(arr, 1);
//    console.log(result);
//}
//
//var helpFun = function(arr, depth) {
//    if(!arr || (Array.isArray(arr) && !arr.length))return 0;
//
//    var total = 0;
//    for(var i = 0, len = arr.length; i < len; i++){
//        if(typeof arr[i] === 'number')total += depth * arr[i];
//        else
//            total += helpFun(arr[i], depth+1);
//    }
//
//    return total;
//}

//non-recursive
var depthSum = function(arr){
    var ret = 0;
    var queque = [];
    var depth = [];

    if(!Array.isArray(arr) || !arr.length)return ret;
    for(var i = 0, len = arr.length; i < len; i++){
        queque.push(arr[i]);
        depth.push(1);
    }

    while(queque.length){
        var top = queque.shift();
        var deep = depth.shift();

        if(typeof top ==='number'){
            ret += top * deep;
        }else{
            for(var j = 0, lenj = top.length; j < lenj; j++){
                queque.push(top[j]);
                depth.push(deep+1);
            }
        }
    }

    return ret;
}



var input = [[1,1],2,[1,1]];
var output = 10;
console.log(depthSum(input))
module.exports = depthSum;