/**
 * @param {string} s
 * @return {number}
 */
var calculate = function(s) {
    if(!s)return 0;
    var ret = 0, number = 0, char, stack = [], sign = 1;
    for(var i = 0, len = s.length; i < len; i++){
        char = s[i];
        if(/\d/.test(char)){
            //digit, add to number
            number = 10 * number + parseInt(char, 10);
        }else if(char === '+'){
            ret += sign * number;
            number = 0;
            sign = 1;
        }else if(char === '-'){
            ret += sign * number;
            number = 0;
            sign = -1;
        }else if(char === '('){
            stack.push(ret);
            stack.push(sign);
            sign = 1;
            number = 0;
            ret = 0;
        }else if(char === ')'){
            ret += sign * number;
            number = 0;
            ret *= stack.pop();
            ret += stack.pop();
        }
    }
    if(number !== 0){
        ret += sign * number;
    }


    return ret;
};

//var s = "1 + 1", num = 2;
//var s = " 2-1 + 2 ", num = 3;
//var s = "(1+(4+5+2)-3)+(6+8)", num = 23;
var s = "(1)", num = 1;
//var s = "1-(5)", num = -4;
console.log(calculate(s));