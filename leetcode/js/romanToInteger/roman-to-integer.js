/**
 * @param {string} s
 * @return {number}
 */
var romanToInt = function(s) {
    if(!s)return 0;
    var prev = 0, curr, ret = 0,char;
    for(var len = s.length, i = len -1; i >=0; i--){
        char = s[i];
        switch(char){
            case 'I': curr = 1; break;
            case 'V': curr = 5; break;
            case 'X': curr = 10; break;
            case 'L': curr = 50; break;
            case 'C': curr = 100; break;
            case 'D': curr = 500; break;
            case 'M': curr = 1000; break;
        }

        ret = curr >= prev ? ret + curr : ret - curr;
        prev = curr;
    }

    return ret;


};

module.exports = romanToInt;