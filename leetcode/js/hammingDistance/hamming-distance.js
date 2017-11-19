/**
 * @param {number} x
 * @param {number} y
 * @return {number}
 */
var hammingDistance = function(x, y) {
    var val = x ^ y;
    var dist = 0;
    while(val){
        dist++;
        val &= val -1;
    }

    return dist;
};

module.exports = hammingDistance;