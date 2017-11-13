/**
 * @param {string} s
 * @return {boolean}
 */
var isNumber = function(s) {
    s = s.trim();
    var hasDot = false;
    var hasE = false;
    var hasNum = false;
    var hasNumAfterE = true;

    for(var i = 0, len = s.length; i < len; i++){
        var char = s[i];
        if(/[0-9]/.test(char)){
            hasNum = true;
            hasNumAfterE = true;
        }else if(char === '.'){
            if(hasE || hasDot)return false;
            hasDot = true;
        }else if(char === 'e'){
            if(hasE || !hasNum)return false;
            hasNumAfterE = false;
            hasE = true;
        }else if(char === '-' || char === '+') {
            if(i !== 0 && s.charAt(i-1)!== 'e')return false;
        }else {
            return false;
        }
    }

    return hasNum && hasNumAfterE;
};

module.exports = isNumber;