/**
 * @param {string} s
 * @return {number}
 */
var longestValidParentheses = function(s) {
    if (!s || !s.length) return 0;
    let len = s.length, maxL = 0;
    let stack = [], char, start = -1, pop;

    for (var i = 0; i < len; i++) {
        char = s.charAt(i);
        if (char == '(')stack.push(i);
        else{
            if(stack.length) {
                stack.pop();
                if(!stack.length) {
                    maxL = Math.max(maxL, i - start);
                } else{
                    pop = stack.pop();
                    maxL = Math.max(maxL, i - pop);
                    stack.push(pop);
                }

            }else {
                start = i;
            }

        }

    }


    return maxL;
};

module.exports = longestValidParentheses;