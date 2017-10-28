//https://leetcode.com/problems/anagrams/
var arr = ["eat", "tea", "tan", "ate", "nat", "bat"];
var outArr = [
    ["ate", "eat","tea"],
    ["nat","tan"],
    ["bat"]
];

function groupAnagrams(arr){
    var hashObj = {};
    var result = [];
    var sortItem;
    var rowIndex = 0;
    var matchedRowIndex;

    arr.forEach(function(item, index){
       sortItem = item.split('').sort().join('');
       if(hashObj[sortItem] === undefined){
           hashObj[sortItem] = rowIndex;
           result[rowIndex] = [];
           result[rowIndex].push(item);
           rowIndex++;
       }else{
           matchedRowIndex = hashObj[sortItem];
           result[matchedRowIndex].push(item);
       }
    });

    result = result.map(function(item){
        return item.sort();
    })


    return result;
}

'use strict'
require('babel-core/register')
var Mocha = require('mocha');
var expect = require('chai').expect;
var mocha = new Mocha({ui: 'bdd'});
mocha.suite.emit('pre-require', this, 'solution', mocha);

describe("group anagrams", () => {
    it('it', function(){
        expect(groupAnagrams(arr)).to.deep.equal(outArr);
    })
});