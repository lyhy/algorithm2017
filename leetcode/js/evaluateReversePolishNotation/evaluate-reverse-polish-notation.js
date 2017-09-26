/**
 * @param {string[]} tokens
 * @return {number}
 */
//var evalRPN = function(tokens) {
//    return Math.floor(r(tokens));
//};
//
//var r = function(tokens){
//    var top = tokens.pop(), x, y;
//    if(/^[\+\-\*\/]$/.test(top)){
//        y = r(tokens);
//        x = r(tokens);
//        if(top === '+') x += y;
//        else if(top === '-') x -= y;
//        else if(top === '*') x *= y;
//        else x /= y;
//    }else {
//        x = parseInt(top);
//    }
//    return x;
//}
function evalRPN(tokens) {
    var returnValue = 0;
    var operators = "+-*/";

    var stack = [];
    for (var i=0; i<tokens.length; i++) {
        //if (operators.indexOf(tokens[i]) == -1) {
        if (!/^[\+\-\*\/]$/.test(tokens[i])) {
            stack.push(tokens[i]);
        } else {
            var a = parseInt(stack.pop());
            var b = parseInt(stack.pop());
            switch (tokens[i]) {
                case "+":
                    stack.push(a + b);
                    break;
                case "-":
                    stack.push(b - a);
                    break;
                case "*":
                    stack.push(a * b);
                    break;
                case "/":
                    stack.push(b / a);
                    break;
            }
        }
    }

    returnValue = parseInt(stack.pop());

    return returnValue;
}
evalRPN(["4","13","5","/","+"]);

module.exports = evalRPN;