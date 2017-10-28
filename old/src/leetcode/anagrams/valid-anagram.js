//https://leetcode.com/problems/valid-anagram/


/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isAnagram = function(s, t) {
    if(s.length!==t.length)return false;
    var dict = {};
    var c1, c2;
    for(var i=0;i<s.length;i++){
        c1 = s[i];
        c2 = t[i];
        dict[c1] = dict[c1] ? (dict[c1]+1) : 1;
        dict[c2] = dict[c2] ? (dict[c2]-1) : -1;
    }

    for(var key in dict){
        if(dict[key]!==0)return false;
    }

    return true;

};

/** TEST SUITE **/
'use strict'
require('babel-core/register')
var Mocha = require('mocha');
var expect = require('chai').expect;
var mocha = new Mocha({ui: 'bdd'});
mocha.suite.emit('pre-require', this, 'solution', mocha);

var s = "anagram", t = "nagaram", expected= true;
var s1 = "rat", t1 = "car", expected1 = false;

describe("test", () => {
    it('is anagram', function(){
        expect(isAnagram(s,t)).to.be.true;
    });
    it('is not anagram', function(){
        expect(isAnagram(s1,t1)).to.be.false;
    })



});
