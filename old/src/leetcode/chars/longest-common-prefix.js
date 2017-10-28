//https://leetcode.com/problems/longest-common-prefix/
//Write a function to find the longest common prefix string amongst an array of strings.
var arr = ['bcde', 'bcfdfa', 'bce'];
var expectArr = 'bc';
var longestCommonPrefix = function(strs) {
    var result = '';
    var len = strs.length;
    var prefix = strs[0];
    var comparedLen;

    if(len === 0) return '';

    for(var i = 0; i<strs.length; i++){
        if(prefix.length === 0 || strs[i].length === 0 )return '';

        comparedLen = Math.min(prefix.length, strs[i].length);

        for(var j= 0; j<comparedLen; j++){
            if(prefix[j] !== strs[i][j])break;
        }

        prefix = prefix.substring(0,j);

    }
    return prefix;

};

//testing
'use strict'
require('babel-core/register')
var Mocha = require('mocha');
var expect = require('chai').expect;
var mocha = new Mocha({ui: 'bdd'});
mocha.suite.emit('pre-require', this, 'solution', mocha);

describe("longest common prefix", () => {
    it('it', function(){
        expect(longestCommonPrefix(arr)).to.equal('bc');
    })

});