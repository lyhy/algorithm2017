//https://leetcode.com/problems/sqrtx/
var mySqrt = function(x) {
    if(x <= 1)return x;
    var begin = 1,
        end = Math.ceil(x/2),
        middle = 0,
        y;

    while(begin <= end){
        middle = begin + Math.floor((end - begin)/2);
        y = middle*middle;

        if(y === x){
            return middle;
        }else{
            if(y < x){
                begin = middle + 1;
            }else{
                end = middle -1;
            }
        }
    }

    return end;
};