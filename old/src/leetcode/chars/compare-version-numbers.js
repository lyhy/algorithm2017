//https://leetcode.com/problems/compare-version-numbers/
//0.1 < 1.1 < 1.2 < 13.37
//If version1 > version2 return 1, if version1 < version2 return -1, otherwise return 0.
/**
 * @param {string} version1
 * @param {string} version2
 * @return {number}
 */
var compareVersion = function(version1, version2) {
    var arr1 = version1.split('.');
    var arr2 = version2.split('.');
    if(arr1.length === 0 && arr2.length === 0)return 0;
    var len = Math.max(arr1.length, arr2.length);

    for(var i = 0; i < len; i++){
        if(i>=arr1.length && parseInt(arr2[i], 10) > 0){
            return  -1;
        }
        if(i>=arr2.length && parseInt(arr1[i], 10) > 0){
            return  1;
        }
        if( parseInt(arr1[i], 10) > parseInt(arr2[i], 10) ){
            return 1;
        }

        if(parseInt(arr1[i], 10) < parseInt(arr2[i], 10)){
            return -1;
        }
    }

    return 0;
};

console.log(compareVersion('1.1', '1.2'));//-1