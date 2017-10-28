//https://leetcode.com/problems/happy-number/

/**
 * @param {number} n
 * @return {boolean}
 */
var isHappy = function(n) {
    var existNum = {};
    var sum;
    while(n!==1){
        if(typeof (existNum[n]) !=='undefined'){
            return false;
        }else{
            existNum[n] = true;
            sum = 0;
            while(n){
                sum += Math.pow(n%10, 2);
                n = Math.floor(n/10);
            }

            n = sum;
        }
    }

    return true;
};

console.log(isHappy(19));//true
console.log(isHappy(2));//false
console.log(isHappy(7));//true