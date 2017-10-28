/**
 * @param {number[]} nums
 * @return {number}
 */
var degreeOfAnArray = function(nums) {
    var degreeMap = {}, len = nums.length, i = 0, maxDegree = 0, num;
    for(i = 0; i < len; i++){
        num = nums[i];
        degreeMap[num] ? degreeMap[num]++ : degreeMap[num] = 1;
        maxDegree = Math.max(maxDegree, degreeMap[num]);
    }


    var ret = Number.MAX_VALUE, maxDegreeSubArrayLengthMap = {};
    for(i = 0; i < len; i++) {
        num = nums[i];
        if(degreeMap[num] !== maxDegree)continue;
        else{
            !maxDegreeSubArrayLengthMap[num] ? maxDegreeSubArrayLengthMap[num] = {
                start: i,
                end: i
            }: maxDegreeSubArrayLengthMap[num].end = i;
        }
    }


    for(num in maxDegreeSubArrayLengthMap){
        var cur = maxDegreeSubArrayLengthMap[num];
        ret = Math.min(ret, (cur.end - cur.start) + 1);
    }
     return ret;
};

module.exports = degreeOfAnArray;