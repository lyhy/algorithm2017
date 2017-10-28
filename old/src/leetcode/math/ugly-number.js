//https://leetcode.com/problems/ugly-number/
/**
 * @param {number} num
 * @return {boolean}
 */
var isUgly = function(num) {
    var dict = [2, 3, 5];
    var a = num;

    if(a<=0)return false;
    if(a==1)return true;;

    for(var i = 0; i<dict.length; i++){
        var splitBy = dict[i];
        while(a%splitBy===0){
            a = a/splitBy;
            if(a===1 || dict.indexOf(a)!==-1)return true;
        }
    }

    return false;


};

console.log(isUgly(2));
console.log(isUgly(8));
console.log(isUgly(14));