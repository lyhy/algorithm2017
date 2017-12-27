/**
 * @param {string} digits
 * @return {string[]}
 */
var letterCombinations = function(digits) {
      var dict = {
          '0': [''],
          '1': [''],
          '2': ['a', 'b', 'c'],
          '3': ['d', 'e', 'f'],
          '4': ['g', 'h', 'i'],
          '5': ['j', 'k', 'l'],
          '6': ['m', 'n', 'o'],
          '7': ['p', 'q', 'r', 's'],
          '8': ['t', 'u', 'v'],
          '9': ['w', 'x', 'y', 'z']
      };

    if(!digits)return[];
    var ret = [''], char, len = digits.length, tempArr;

    for(var i = 0; i < len; i++){
        char = digits[i];
        tempArr = [];

        for(var j = 0; j < dict[char].length; j++){
            for(var k = 0; k < ret.length; k++){
                tempArr.push(ret[k] + dict[char][j]);

            }

        }

        ret = tempArr;
    }


    return ret;
};

var input = '23', output = ["ad", "ae", "af", "bd", "be", "bf", "cd", "ce", "cf"];

console.log(letterCombinations(input));