/*
*
* Given a string containing just the characters '(', ')', '{', '}', '[' and ']', determine if the input string is valid.
 The brackets must close in the correct order, "()" and "()[]{}" are all valid but "(]" and "([)]" are not.
* */
function valid(str){
    var dic = {'{': '}', '[': ']', '(': ')'};
    var stack = [];
    var char, popedChar;

    for(var i = 0; i< str.length; i++){
        char = str.charAt(i);
        if(dic[char]){
            stack.push(char);
        }else{
            if(stack.length == 0)return false;
            popedChar = stack.pop();
            if(dic[popedChar] !== char)return false;

        }
    }

    return stack.length===0
}

module.exports = valid;