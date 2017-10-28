//https://leetcode.com/problems/house-robber/
var rob = function(nums) {
    if(nums.length===0)return 0;

    var odd = 0, even = 0;
    for(var i = 0; i < nums.length; i++){
        if(i%2){
            odd = Math.max(odd + nums[i], even);
        }else{
            even = Math.max(even + nums[i], odd);
        }
    }

    return Math.max(odd, even);
};


console.log(rob([2,3,5]));//7