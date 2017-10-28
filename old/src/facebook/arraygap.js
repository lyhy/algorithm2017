/*
*Given an array of positive, unique, increasingly sorted numbers A, e.g. A = [1, 2, 3, 5, 6, 8, 9, 11, 12, 13]. Given a positive value K, e.g. K = 3. Output all pairs in A that differ exactly by K.
 e.g. 2, 5
 3, 6
 5, 8
 6, 9
 8, 11
 9, 12
 what is the runtime for your code?


 * */

var arrayGap = function(a, k){
    var l = 0, r = 0, result = [], pair = [];

    if(a.length <= 0)return [];
    if(k===0){
        for(var i = 0; i < a.length; i++){
           result.push([a[i]]);
        }
        return result;
    }



    while(l<=r && r < a.length){
        if(a[r]-a[l] === k){
            pair = [];
            pair.push(a[l]);
            pair.push(a[r]);
            result.push(pair);
            ++l;
            r = l;
        }else if(a[r]-a[l] < k){
            ++r;
        }else{//r-l > k
            ++l;
            r = l;
        }
    }

    return result;


};

var A = [1, 2, 3, 5, 6, 8, 9, 11, 12, 13];
var K = 3;
console.log(arrayGap(A, K));