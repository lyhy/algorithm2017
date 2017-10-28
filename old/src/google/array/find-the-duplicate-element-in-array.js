/**
 * Given an array of string, find duplicate elements.

 For instance, in array [“abc”, “dd”, “cc”, “abc”, “123”], the duplicate element is “abc”.
 http://blog.gainlo.co/index.php/2016/05/10/duplicate-elements-of-an-array/?utm_source=glassdoor&utm_campaign=glassdoor&utm_medium=11316
 */

var duplicateElement = function(a) {
    ////brute force
    //var ret = '', len, i, j;
    //if(Array.isArray(a)){
    //    for(i = 0, len = a.length; i < len; i++){
    //        for(j = i + 1; j < len; j++){
    //            if(a[j] === a[i]){
    //                ret = a[i];
    //                i = len;
    //                break;
    //            }
    //        }
    //    }
    //
    //}
    //console.log(ret);
    //
    //return ret;

    //=====================
    ////hash set
    //var ret = '';
    //var dict = {}, len, i;
    //if(Array.isArray(a)){
    //    for(i = 0, len = a.length; i < len; i++){
    //        if(dict[a[i]]){
    //            ret = a[i];
    //            break;
    //        }else{
    //            dict[a[i]] = true;
    //        }
    //    }
    //}
    //
    //console.log('found '+ret);
    //
    //return ret;

    //===============

};

module.exports = duplicateElement;