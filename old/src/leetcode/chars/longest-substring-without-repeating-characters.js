/*
 Given a string, find the length of the longest substring without repeating characters.
 For example, the longest substring without repeating letters for "abcabcbb" is "abc",
 which the length is 3. For "bbbbb" the longest substring is "b", with the length of 1.
* */
//https://leetcode.com/problems/longest-substring-without-repeating-characters/
/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function(s) {
    var dict = {};
    var idx = -1;
    var max = 0;

    for(var i = 0; i < s.length; i++){
        if(dict[s[i]] > idx){
            idx = dict[s[i]];
        }

        if(i - idx>max){
            max = i - idx;
        }

        dict[s[i]] = i;
    }

    return max;
};

//v"abcabcbb" is "abc"
//the length is 3. For "bbbbb" the longest substring is "b", with the length of 1

var a = 'abcabcbb';
var b = 'bbbbb';

console.log(lengthOfLongestSubstring(a));//3
console.log(lengthOfLongestSubstring(b));//1

//function subLen(source){
//    var result = 0, i= 0, j= 0, charCode, ascObj = {};
//    while(j< source.length){
//        if(ascObj[source[j]]){
//            result = Math.max(result, j-i);
//            while(source[i]!=source[j]){
//                ascObj[source[i]]=false;
//                i++;
//            }
//            i++;
//            j++;
//        }else{
//            ascObj[source[j]]=true;
//            j++;
//        }
//
//    }
//
//    result = Math.max(result, source.length -i);
//
//    return result;
//
//}

module.exports=subLen;