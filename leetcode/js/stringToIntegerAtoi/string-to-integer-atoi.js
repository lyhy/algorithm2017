/**
 * @param {string} str
 * @return {number}
 */
var myAtoi = function(str) {
    var sign, ch, num;
    str = str.trim();
    if(!str)return 0;

    sign = str.charAt(0) == '-' ? -1 : 1;
    str = str.replace(/^[+-]/, '');
    str = str.replace(/^0*/, '');

    ch = str.charAt(0);
    if(isNaN(ch) || ch == ' '){
        return 0;
    }else {
        num = ch|0
    }

    for(var i = 1, len = str.length; i < len; i++) {
        ch = str.charAt(i);
        if(!/[0-9]/.test(ch))break;

        num = num * 10 + (ch |0);
    }


    num = num * sign;
    if(num > 2147483647)return 2147483647;
    if(num < -2147483648)return -2147483648;
    return num;


};

module.exports = myAtoi;