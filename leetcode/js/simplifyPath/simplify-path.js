/**
 * @param {string} path
 * @return {string}
 */
var simplifyPath = function(path) {
    if(typeof path !== 'string')return '';
    var retArr = [];
    var pathArr = path.split('/');


    /**
     * middle '.' -- ignore
     * middle '..' -- remove previous path
     * end '/' -- ignore
     * extra '/', pathArr[i] === '', ignore
     *
     */

    var startSlash = pathArr.length > 0 && pathArr[0] === '' ? '/' : '';

    for(var i = 0, len = pathArr.length; i < len; i++){
        if(!pathArr[i] || (pathArr[i] === '.' && i !== 0))continue;

        if(pathArr[i] === '..' && pathArr.length > 1){
            retArr.pop();
        }else {
            retArr.push(pathArr[i]);
        }
    }

    var ret = startSlash + retArr.join('/');


    return ret;
};

module.exports = simplifyPath;