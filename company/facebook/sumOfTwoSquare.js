var a = 17, ret = true;

isSumOfTwoSquare = function(n) {
    for(var i = 0; i * i < n; i++){
        var root = Math.sqrt(n - i * i);
        if(Math.abs(root - Math.ceil(root)) < Number.MIN_VALUE)return true;
    }

    return false;
}



//var a = 17, ret = true;
var a = 26, ret = true;
var a1 = 15, ret = false;
var a2 = 7, ret = false;
var a3 = 63744256, ret = true;
console.log(isSumOfTwoSquare(a))
console.log(isSumOfTwoSquare(a1))
console.log(isSumOfTwoSquare(a2))
console.log(isSumOfTwoSquare(a3))



