//var flatArray = function(arr) {
//    var ret = [];
//    for(var i = 0, len = arr.length; i < len; i++){
//        if(Array.isArray(arr[i])){
//            ret = ret.concat(flatArray(arr[i]));
//        }else {
//            ret.push(arr[i]);
//        }
//    }
//
//    return ret;
//}
//not working
//function flatArray(arr) {
//    var i = 0;
//    console.log(arr);
//    while ( i < arr.length) {
//        arr = arr.reduce(function (prev, curr) {
//            return prev.concat(curr);
//        }, []);
//        console.log(arr)
//        i++;
//    }
//    return arr;
//}
//not working end

function flatArray(arr) {
    let ret = [];

    while(arr.length){
        let first = arr.shift();
        if(Array.isArray(first)){
            for(var len = first.length, i = len -1; i >= 0; i--){
                arr.unshift(first[i]);
            }
        }else{
            ret.push(first);
        }
    }

    return ret;
}



var arr = [[[[-1,[-2]]]],[0, 1], [2, 3], [4, 5, [6, 7, [8, [9, 10]]]]];
//var arr = [[[[-1,[-2]]]]];
console.log(flatArray(arr));