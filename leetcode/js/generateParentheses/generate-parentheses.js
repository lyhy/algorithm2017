
/**
 * @param {number} n
 * @return {string[]}
 */
var generateParenthesis = function(n) {
    var ret = [];

    if(!n)return ret;

    helper(ret, '', 0, 0, n)

    return ret;
};

var helper = function(ret, str, open, close, max) {
    if(str.length === 2* max){
        ret.push(str);
        return;
    }

    if(open < max)helper(ret, str + '(', open+1, close, max);
    if(close < open)helper(ret, str + ')', open, close+1, max);
}

var n = 3, output = [
    "((()))",
    "(()())",
    "(())()",
    "()(())",
    "()()()"
];

console.log(generateParenthesis(n));