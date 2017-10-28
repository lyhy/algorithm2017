/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isIsomorphic = function(s, t) {
    if(s.length !== t.length)return false;
    var dict = {};
    for(var i = 0, len = s.length; i < len; i++ ){
        if(!dict[s[i]]) dict[s[i]] =  t[i];
        if(dict[s[i]] !== t[i])return false;
    }
    dict = {};
    for(var j = 0, len = t.length; j < len; j++ ){
        if(!dict[t[j]]) dict[t[j]] =  s[j];
        if(dict[t[j]] !== s[j])return false;
    }

    return true;

};

module.exports = isIsomorphic;