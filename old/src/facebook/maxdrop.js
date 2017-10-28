//Given an array of integer, find the maximum drop between two array elements, given that second element comes after the first one.

var maxDrop = function(a){
    if(a.length <=1)return -1;
    var prev = a[1];
    var minDrop , drop;

    minDrop  = a[0] - a[1];


    for(var i = 2; i<a.length; i++){
        drop = a[i-1] - a[i];
        if(drop > minDrop)minDrop = drop;
    }

    return minDrop;
};

var a = [0,100,50];
console.log(maxDrop(a));