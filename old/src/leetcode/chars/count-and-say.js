//https://leetcode.com/problems/count-and-say/
/*
*1 is read off as "one 1" or 11.
 11 is read off as "two 1s" or 21.
 21 is read off as "one 2, then one 1" or 1211.
 111221
* */

/**
 * @param {number} n
 * @return {string}
 */
var countAndSay = function(n) {
    var result = '1';
    if(n<1)return '' ;
    var i, j, count, temp, prev;

    for(i = 2; i <= n; i++){
        temp = '';
        count = 1;
        prev = result[0];
        for(j = 1; j < result.length; j++){
            if(result[j]=== prev){
                count++;
            }else{
                temp += count + prev;
                count = 1;
                prev = result[j];
            }
        }
        temp += count + prev;
        result = temp;
    }
    return result;

};

for(var k = 0; k < 100; k++){
    console.log(countAndSay(k));
}
