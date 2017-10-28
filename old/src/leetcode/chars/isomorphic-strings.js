//https://leetcode.com/problems/isomorphic-strings/
/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isIsomorphic = function(s, t) {
    if(s.length !== t.length)return false;
    var dict = {};

    for(var i = 0; i < s.length; i++){
        if(!dict[s[i]]){
            dict[s[i]] = t[i];
        }

        if(dict[s[i]]!== t[i])return false;
    }

    dict = {};
    for(var i = 0; i < t.length; i++){
        if(!dict[t[i]]){
            dict[t[i]] = s[i];
        }

        if(dict[t[i]]!== s[i])return false;
    }


    return true;
};
/*
 Given "egg", "add", return true.

 Given "foo", "bar", return false.

 Given "paper", "title", return true.
 */
var a1 = 'egg', a2 = 'add';
var b1 = 'foo', b2 = 'bar';
var b11 = 'bar', b22 = 'foo';
var c1 = 'paper', c2 = 'title';
var d1 = 'ab', d2 = 'aa';
var e1 = 'ab', e2 = 'ca';
var f1 = 'a', f2 = 'a';

console.log(isIsomorphic(a1,a2));//true
console.log(isIsomorphic(b1,b2));//false
console.log(isIsomorphic(b11,b22));//false
console.log(isIsomorphic(c1,c2));//true
console.log(isIsomorphic(d1,d2));//false
console.log(isIsomorphic(e1,e2));//true
console.log(isIsomorphic(f1,f2));//true