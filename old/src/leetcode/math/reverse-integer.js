//https://leetcode.com/problems/reverse-integer/


/**
 * @param {number} x
 * @return {number}
 */
var reverse = function(x) {
    var resultStr = '';
    var sign = 1;
    var max = Math.pow(2,31) -1;
    var min = Math.pow(2,31)* -1;
    var str, l, r, temp, num;
    if(x<0){
        sign = -1;
        x = x * -1;
    }

    str = x.toString().split('');

    l = 0; r = str.length -1;
    while(l<r){
        temp = str[l];
        str[l] = str[r];
        str[r] = temp;

        l++;
        r--;
    }

    num = parseInt(str.join(''), 10);
    num = num * sign;
    if(num > max || num < min) return 0;

    return num;




};
/*
*Example1: x = 123, return 321
 Example2: x = -123, return -321
* */
console.log(reverse(-123));