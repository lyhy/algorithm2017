//https://leetcode.com/problems/count-primes/
/**
 * @param {number} n
 * @return {number}
 */
var countPrimes = function(n) {
    var primeArray = new Array(n+1).fill(true);
    if(n<=1)return 0;
    var len = Math.sqrt(n);
    for(var i = 2; i < len; i++){
        if(primeArray[i]){
            for(var j = 2; j * i <n; j++){
                primeArray[i*j] = false;
            }
        }
    }
    var count = 0;
    for(var k = 2; k < n; k++){
        primeArray[k] && count++
    }

    return count;


};

console.log(countPrimes(2));//1
console.log(countPrimes(10));//2,3,5,7=>4
//console.log(countPrimes(2));//1