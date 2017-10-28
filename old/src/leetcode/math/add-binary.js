//https://leetcode.com/problems/add-binary/
/*
*a = "11"
 b = "1"
 Return "100".
* */

/**
 * @param {string} a
 * @param {string} b
 * @return {string}
 */
var addBinary = function(a, b) {
    var lenA = a.length;
    var lenB = b.length;
    var len = Math.min(lenA, lenB);
    var plusone = 0;
    var sum = [], digitsum, a1, b1;

    for(var i = 1; i <= len; i++){
        digitsum = parseInt(a[lenA-i],10) + parseInt(b[lenB-i],10) + plusone;
        if(digitsum >= 2){
            digitsum = digitsum - 2;
            plusone = 1;
        }else{
            plusone = 0;
        }
        sum.unshift(digitsum);
    }
    if(len < lenA){
        for(i = lenA-len-1; i>=0; i--){
            digitsum = parseInt(a[i],10) + plusone;
            if(digitsum >= 2){
                digitsum = digitsum - 2;
                plusone = 1;
            }else{
                plusone = 0;
            }
            sum.unshift(digitsum);
        }
    }

    if(len < lenB){
        for(i = lenB-len-1; i>=0; i--){
            digitsum = parseInt(b[i],10) + plusone;
            if(digitsum >= 2){
                digitsum = digitsum - 2;
                plusone = 1;
            }else{
                plusone = 0;
            }
            sum.unshift(digitsum);
        }
    }


    plusone && sum.unshift(1);

    return sum.join('');
};



console.log(addBinary('11', '1'));//100
console.log(addBinary('0', '0'));//100
console.log(addBinary('100', '110010'));//110110