//https://leetcode.com/problems/permutations/

//solution1
/**
 * @param {number[]} nums
 * @return {number[][]}
 */
    /*
var permute = function(nums) {
    var res = [];
    if(nums === null || nums.length === 0){
        return res;
    }

    var row = [];
    helper(nums, row, res);
    return res;
};

var helper = function(nums, row, res){
    if(nums.length === row.length ){
        res.push(row.slice(0));
        return;
    }

    for(var i = 0; i<nums.length; i++){
        if(row.indexOf(nums[i])!== -1){
            continue;
        }

        row.push(nums[i]);
        helper(nums, row, res);
        row.pop();
    }
}
*/

//solution2
var permute = function(nums) {
    var res = [];
    generate(nums, 0, nums.length, res);
    return res;
};

var generate = function(nums, start, end, res){
    var row = nums.slice(0);
    if(start === end -1){
        res.push(row);
        return;
    }

    for( var i = start; i<end;i++){
        swap(row,start, i);
        generate(row, start+1, end, res);
        swap(row, start, i);
    }


}

var swap = function(row, a,b){
    var temp = row[a];
    row[a] = row[b];
    row[b] = temp;
};

var a = [1,2,3];
console.log(permute(a));//