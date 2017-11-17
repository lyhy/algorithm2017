var reversDepth = function(arr) {
    var maxDepth = getDeepMax(arr);
    console.log(maxDepth);
    return helper(arr, maxDepth)
}
var getDeepMax = function(arr) {
    var a = arr.slice(0);
    var depth = 0, cur, currentLayerLength;
    while(a.length){
        currentLayerLength = a.length;
        while(currentLayerLength) {
            currentLayerLength--;
            cur = a.shift();
            if (Array.isArray(cur))a = a.concat(cur);
        }
        depth++;
    }
    return depth;
}

var helper = function(arr, factor) {
    var ret = 0, cur;
    for(var i = 0, len = arr.length; i < len; i++){
        cur = arr[i];
        if(Array.isArray(cur)){
            ret += helper(cur, factor-1);
        }else{
            ret += cur * factor;
        }
    }
    return ret;

}
//var input = [1, [4,[6]]], output = 17;
var input = [[1,1],2,[1,1]], output = 8;

console.log(reversDepth(input))