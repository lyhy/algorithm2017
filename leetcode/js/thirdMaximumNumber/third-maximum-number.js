/**
 * @param {number[]} nums
 * @return {number}
 */
var thirdMax = function(nums) {
    var m1,m2,m3, n;
    for(var i = 0, len = nums.length; i < len; i++){
        n = nums[i];
        if(m1 === n || m2 === n || m3 === n)continue;
        if(typeof m1 === 'undefined' || n > m1){
            m3 = m2;
            m2 = m1;
            m1 = n;
        }else if(typeof m2 === 'undefined' || n > m2){
            m3 = m2;
            m2 = n;
        }else if(typeof m3 === 'undefined' || n > m3){
            m3 = n;
        }
    }

    return typeof m3 === 'undefined'? m1 : m3;
    
};

var input = [3, 2, 1], output = 1;
console.log(thirdMax(input))