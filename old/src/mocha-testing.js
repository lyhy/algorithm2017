/////////coderpad////////////
var Mocha = require('mocha');
var expect = require('chai').expect;
var mocha = new Mocha({ui: 'bdd'});
mocha.suite.emit('pre-require', this, 'solution', mocha);

describe("testing suite", () => {
    it('testing case', function(){

        expect([1,2,3]).to.deep.equal([1,2,3]);
    })


});

mocha.run(function() {});


/////////////////webstorm////////////////
/** TEST SUITE **/
'use strict'
require('babel-core/register')
var Mocha = require('mocha');
var expect = require('chai').expect;
var mocha = new Mocha({ui: 'bdd'});
mocha.suite.emit('pre-require', this, 'solution', mocha);

describe("test", () => {
    it('it', function(){
        expect(obj).to.deep.equal('wjk');
    })



});

//var r = [true, true, false, false, true, false];
//
//data.forEach((str, i) => {
//    it("should be " + (r[i] ? "balanced" : "unbalanced"), () => {
//        var chars = str.split('');
//        expect(isBalanced(chars)).to.equal(r[i]);
//    });
//});
//mocha.run(function() {});

mocha --compilers js:babel-core/register __tests__/es6/syntax-test.js
node --harmony __tests__/es6/operatorTree.js



