/**
 * Given a string containing just the characters '(' and ')', find the length of the longest valid (well-formed) parentheses substring.
 For "(()", the longest valid parentheses substring is "()", which has length = 2.
 Another example is ")()())", where the longest valid parentheses substring is "()()", which has length = 4.
 * */

function longest(str){
    var len =str.length;
    var stack = [];
    var max_length=0;
    var startMatchIndex = 0;
    var popIndex;
    for(var i=0; i<len; i++){
        if(str[i] == '('){
            stack.push(i);
            continue;
        }else{
            if(stack.length!==0){
                popIndex = stack.pop();
                max_length += 2 ;
            }
        }
    }

    return max_length;

}


module.exports=longest;