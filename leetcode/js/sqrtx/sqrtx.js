/**
 * @param {number} x
 * @return {number}
 */
//var mySqrt = function(x) {
//    if(x<0)return 0;
//    var minGap = 1e-5, ret = x, prev = 0;
//
//    while( Math.abs(ret* ret - x) > minGap){
//        ret = Math.floor(ret + x/ret)/2;
//    }
//
//    return ret;
//
//};

var mySqrt = function(x) {
    if(x<0)return 0;
    var start = 1, middle, end = Math.ceil(x/2), y;

    while( start < end){
        middle = Math.floor((start + end)/2);
        y = middle * middle;
        if(y === x) return y;
        else if(y > x){
            end = middle -1;
        }else {
            start = middle +1;
        }
    }

    return end;

};

module.exports = mySqrt;