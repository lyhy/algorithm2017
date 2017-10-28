//https://leetcode.com/problems/minimum-window-substring/
/**
 * @param {string} s
 * @param {string} t
 * @return {string}
 */
var minWindow = function(s, t) {
    var sn = s.length;
    var tn = t.length;
    var needToFind = {};
    var hasFound = {};
    var minL, minR;
    var minLen = sn +1, tempLen;
    var count = 0;
    var ch;

    for(var i = 0; i < tn; i++){
        needToFind[t[i]] = needToFind[t[i]] ? needToFind[t[i]] + 1 : 1;
    }

    for(var l = 0, r = 0; r < sn; r++){
        if(!needToFind[s[r]])continue;
        ch = s[r];
        hasFound[ch] = hasFound[ch] ? hasFound[ch] + 1 : 1;

        if(hasFound[ch] <= needToFind[ch])++count;

        if(count === tn){
           while(!needToFind[s[l]] || hasFound[s[l]] > needToFind[s[l]]){
               if(hasFound[s[l]] > needToFind[s[l]]){
                   --hasFound[s[l]];
               }

               ++l;
           }

            tempLen = r - l + 1;
            if( tempLen < minLen){
                minL = l;
                minR = r;
                minLen = tempLen;
            }
        }
    }


    return minLen <= sn? s.substr(minL, minR - minL + 1) : '';






};
var s = 'ADOBECODEBANC';
var t = 'ABC';

console.log(minWindow(s, t));//BANC
