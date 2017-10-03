/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var subsets = function(nums) {

    //solution 1
    //var ret = [[]];
    //if(!nums || !nums.length)return ret;
    //var len = nums.length;
    //for(var i=0;i<len;i++){
    //    var l = ret.length;
    //    var num = nums[i];
    //    var array = [num];
    //    for(var j=0;j<l;j++){
    //        var tmparray = ret[j].concat(array);
    //        ret.push(tmparray);
    //        //console.log(ret);
    //    }
    //}
    //console.log(ret);
    //return ret;
    //solution1 end

    //solution2
    var ret = [];
    var path = [];
    if(!nums || !nums.length)return [[]];
    recursiveSubsets(nums, path, 0, ret);
    console.log(ret);
    return ret;
    //solution2 end
};

function recursiveSubsets(nums, path, step, ret){
    if(step === nums.length){
        //path passed in as reference, if not copy it, it always be last value
        ret.push(path.slice());
        //ret.push(path);//wrong one
        return;
    }

    recursiveSubsets(nums, path, step + 1, ret);
    path.push(nums[step]);
    recursiveSubsets(nums, path, step + 1, ret);
    path.pop();
}

module.exports = subsets;

var input = [1,2,3];
var output = [
    [3],
    [1],
    [2],
    [1,2,3],
    [1,3],
    [2,3],
    [1,2],
    []
];

subsets(input);