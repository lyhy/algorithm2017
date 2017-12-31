//https://www.youtube.com/watch?v=IFNibRVgFBo
/**
 * @param {number[]} nums
 * @return {number}
 */
var maxCoins = function(nums) {
    if(!nums || !nums.length)return 0;
    var c = new Array(nums.length);

    for(var p = 0; p < nums.length; p++){
        c[p] = new Array(nums.length).fill(0);
    }

    for(var len = 1; len <= nums.length; len++){
        for(var i = 0; i <= nums.length -len; i++){
            var j = i + len -1;

            for(var k = i; k <=j; k++){
                var leftValue = 1;
                var rightValue = 1;
                if(i!=0)leftValue = nums[i-1];
                if(j!=nums.length -1)rightValue = nums[j+1];

                var before = 0;
                var after = 0;
                if(i!=k)before = c[i][k-1];
                if(j!=k)after = c[k+1][j];

                c[i][j]=Math.max(c[i][j],
                leftValue * nums[k]*rightValue + before + after);

            }
        }
    }

    return c[0][nums.length-1];
};

var nums = [3, 1, 5, 8], output = 167;

console.log(maxCoins(nums));


