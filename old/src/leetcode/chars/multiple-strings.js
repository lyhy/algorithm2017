/**
 * Given two numbers represented as strings, return multiplication of the numbers as a string.
 Note: The numbers can be arbitrarily large and are non-negative.
 */

function mutipleStrs(num1, num2){
    var rst = 0;
    var m = num1.length;
    var n = num2.length;
    var a, b;

    for(var i= 0; i<m; i++){
        a = parseInt(num1[m-1-i]);
        for(var j=0; j<n; j++){
            b = parseInt(num2[n-1-j]);
            rst += a*b*Math.pow(10,(i+j));
        }
    }
    return rst + '';
}


module.exports = mutipleStrs;