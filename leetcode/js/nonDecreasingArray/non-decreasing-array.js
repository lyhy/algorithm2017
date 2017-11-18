/**
 * @param {number[]} nums
 * @return {boolean}
 */
var checkPossibility = function(nums) {
    var counter = 0;
    for(var i = 0, len = nums.length; i <len-1 && counter<=1; i++){
        if(nums[i] > nums[i + 1] ){
            counter++;
            if(i-1<0 || nums[i-1] <= nums[i+1])nums[i] = nums[i-1];
            else nums[i+1] = nums[i];
        }
    }

    return counter <=1;

};

module.exports = checkPossibility;

var a =[4,2,1]], val =true;
console.log(checkPossibility(a))