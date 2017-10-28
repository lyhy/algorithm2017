//https://leetcode.com/problems/string-to-integer-atoi/
/**
 * @param {string} str
 * @return {number}
 */
var myAtoi = function(str) {
    var sign = 1;
    var num;
    var len;
    var digit;

    str = str.trim();
    if(str.length === 0) return 0;


    if(str[0] === '-' ||str[0] === '+' ){
        sign = str[0] === '-'? -1 : 1;
        str = str.substr(1);
    }
    str = str.replace(/^0*/,'');

    digit = parseInt(str[0], 10);

    if(isNaN(digit)){
        return 0;
    }else{
        num = digit;
    }


    for(var i = 1; i<str.length; i++){
        digit = parseInt(str[i], 10);
        if(isNaN(digit))break;
        num = num * 10 + digit;
    }
    num = num * sign;
    if(num > 2147483647)return 2147483647;
    if(num < -2147483648)return -2147483648;
    return num;
};

console.log(myAtoi('-1234u'));//
