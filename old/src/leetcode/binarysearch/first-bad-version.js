//https://leetcode.com/problems/first-bad-version/
/**
 * Definition for isBadVersion()
 *
 * @param {integer} version number
 * @return {boolean} whether the version is bad
 * isBadVersion = function(version) {
 *     ...
 * };
 */

/**
 * @param {function} isBadVersion()
 * @return {function}
 */
var solution = function(isBadVersion) {
    /**
     * @param {integer} n Total versions
     * @return {integer} The first bad version
     */
    return function(n) {
        var l = 1, r = n, m = l + Math.floor((r - l)/2);

        while(l<r){
            if(l === m || r ===m){
                return isBadVersion(l)? l : isBadVersion(r)? r : 0;

            }
            if(isBadVersion(m)){

                r = m;
                m = l + Math.floor((r - l)/2);
            }else{
                l = m;
                m = l + Math.floor((r - l)/2);
            }
        }
        return m;
    };
};