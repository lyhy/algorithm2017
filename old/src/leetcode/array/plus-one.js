//https://leetcode.com/problems/plus-one/
/**
 * @param {number[]} digits
 * @return {number[]}
 */
var plusOne = function(digits) {
    digits = digits.reverse();
    var hasOne = false;
    var num;
    for(var i=0; i<digits.length; i++){
        num = digits[i];
        i===0 && num++;
        hasOne && num++;
        if(num >= 10) {
            hasOne = true;
            num = num - 10;
        }else{
            hasOne = false;
        }
        digits[i] = num;
    }
    hasOne && digits.push(1);

    return digits.reverse();

};


console.log(plusOne([9,9,9]))//[1,0,0,0]