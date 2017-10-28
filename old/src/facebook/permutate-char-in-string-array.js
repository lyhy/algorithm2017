/*
*Permutate a list of string
 this question is supposed permutate the characters instead of who string,

 as input example {"red", "fox", "super" }, the expected output is

 rfs
 rfu
 rfp
 rfe
 rfr
 ros
 rou
 rop
 roe
 ror
 rxs
 rxu
 rxp
 rxe
 rxr
 efs
 efu
 efp
 efe
 efr
 eos
 eou
 eop
 eoe
 eor
 exs
 exu
 exp
 exe
 exr
 dfs
 dfu
 dfp
 dfe
 dfr
 dos
 dou
 dop
 doe
 dor
 dxs
 dxu
 dxp
 dxe
 dxr


 * */
var sol =  [];
var permute = function(arr, str){
    str = str || '';
    var tempArr;
    if(arr.length > 0){
        tempArr = arr[0].split('');//save each chars in first string.
        for(var i = 0; i < tempArr.length; i++){
            permute(arr.slice(1), str + arr[0][i]);
        }
    }else{
        sol.push(str);
        //console.log(str);
    }
};
var a = ["red", "fox", "super"];
permute(a);
console.log(sol);