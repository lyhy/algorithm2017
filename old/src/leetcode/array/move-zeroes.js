//https://leetcode.com/problems/move-zeroes/
/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var moveZeroes = function(nums) {
    var pos = 0;
    for(var i= 0; i<nums.length;i++){
        if(nums[i]!=0){
            nums[pos] = nums[i];
            pos++
        }
    }

    for(;pos<nums.length; pos++){
        nums[pos]=0;
    }
};

var arr = [0, 1, 0, 3, 12];
var expectedArr = [1, 3, 12, 0, 0];

/** TEST SUITE **/
'use strict'
require('babel-core/register')
var Mocha = require('mocha');
var expect = require('chai').expect;
var mocha = new Mocha({ui: 'bdd'});
mocha.suite.emit('pre-require', this, 'solution', mocha);

describe("test", () => {
    it('it', function(){
        moveZeroes(arr);
        expect(arr).to.deep.equal(expectedArr);
    })



});