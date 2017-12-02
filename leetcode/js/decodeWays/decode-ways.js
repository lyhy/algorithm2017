/**
 * @param {string} s
 * @return {number}
 */
var numDecodings = function(s) {
    if(!s || !s.length)return 0;

    var len = s.length;
    var mem = new Array(len + 1);
    mem[len] = 1;
    mem[len -1] = s[len -1] !=='0' ? 1 : 0;

    for(var i = len -2; i >= 0; i--){
        if(s[i] === '0'){
            mem[i] = 0;
            continue;
        }
        mem[i] = parseInt(s.substr(i, 2), 10) > 26 ? mem[i+1]: mem[i+1] + mem[i+2];
    }



    return mem[0];
};

//var a = '12', // decode = 'L', or 'AB'
//   output = 2;
//var a = '00', output = 0;
//var a = '01', output = 0;
var a = '101', output = 1;

console.log(numDecodings(a));