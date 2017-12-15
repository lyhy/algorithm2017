//https://leetcode.com/problems/find-smallest-letter-greater-than-target/description/

/**
 * @param {character[]} letters
 * @param {character} target
 * @return {character}
 */
var nextGreatestLetter = function(letters, target) {
    var len = letters.length;
    if(letters[len-1]<=target || letters[0]>target)return letters[0];

    var l = 0, r = len -1, m;
    while(l <= r){
        m = Math.floor((l+r)/2);
        if(letters[m] <= target){
            l = m+1;
        }else{
            if(m-1 < 0 || (m-1>=0 && letters[m-1] <= target))return letters[m];
            else if(m - 1 >=0 && letters[m-1] > target){
                r = m -1;
            }
        }
    }

    return -1;
};
//var letters = ["c", "f", "j"], target = "a", Output= "c";
//var letters = ["c", "f", "j"], target = "c", Output= "f";
//var letters = ["c", "f", "j"], target = "d", Output= "f";
//var letters = ["c", "f", "j"], target = "g", Output= "j";
//var letters = ["c", "f", "j"], target = "j", Output= "c";
var letters = ["c", "f", "j"], target = "k", Output= "c";




console.log(nextGreatestLetter(letters, target));

/**
 *


 Input:
 letters = ["c", "f", "j"]
 target = "k"
 Output: "c"
 */