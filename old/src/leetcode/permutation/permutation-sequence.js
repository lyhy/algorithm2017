//https://leetcode.com/problems/permutation-sequence/
/**
 * @param {number} n
 * @param {number} k
 * @return {string}
 */

var getPermutation = function(n, k) {
    var nums = [];
    var factN = factoorial(n);

    for(var i = 1; i <= n; i++){
        nums.push(i);
    }

    if(k>factN){
        k = k%factN;
    }

    for(var j = 0; j < k; j++){
        nextPermutation(nums);
    }

    return nums.join(',');
};

var factoorial = function(n){
    var result = 1;
  for(var i = 1; i <= n; i++ ){
      result = result * i;
  }
    return result;
};



var nextPermutation = function(nums) {
    var len = nums.length;
    if(len <= 1)return;
    //var p = len -1;
    for(var i = len-1; i >0; i-- ){
        if(nums[i] > nums[i-1]){
            break;
        }
    }

    if(i === 0){
        nums.reverse();

        return;
    }


    var first = nums[i-1];
    var min = nums[i], minIndex = i;

    for(var j = i +1; j<nums.length; j++){
        if(nums[j] > first && nums[j] < min){
            minIndex = j;
            min = nums[j];
        }
    }
    swap(nums, i-1, minIndex);
    var subNums = nums.slice(i);
    subNums.sort(function(a,b){
        return a - b;
    });

    nums.splice(i ,len-i+1);
    subNums.forEach(function(item){
        nums.push(item);
    });

};

var swap = function(nums, index1, index2){
    var temp = nums[index1];
    nums[index1] = nums[index2];
    nums[index2] = temp;
};
var n = 8;
var k = 35784;

console.log(factoorial(n));
console.log(getPermutation(n,k));