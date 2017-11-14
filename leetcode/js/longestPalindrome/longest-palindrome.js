/**
 * @param {string} s
 * @return {number}
 */
var longestPalindrome = function(s) {
    if(!s || !s.length)return 0;
    var stack = [];
    var counter = 0;
    for(var i = 0, len = s.length; i < len; i++){
        var char = s.charAt(i);
        var index = stack.indexOf(char)
        if(index !== -1){
            stack.splice(index, 1);
            counter++;
        }else {
            stack.push(char);
        }
    }

    if(stack.length)return counter * 2 + 1;
    else return counter *2;
};

module.exports = longestPalindrome;