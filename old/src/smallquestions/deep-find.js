function deepFind(obj, path){
    return path.split('.').reduce(function(obj, field) {
        return obj ? (obj[field] || null) : null;
    }, obj);
};

var a = {
        b: {
            c: {
                d: 'abcd'
            }
        }
    },
    f = {
        b: {
            c: {}
        }
    };


//testing
'use strict'
require('babel-core/register')
var Mocha = require('mocha');
var expect = require('chai').expect;
var mocha = new Mocha({ui: 'bdd'});
mocha.suite.emit('pre-require', this, 'solution', mocha);

describe("test", () => {
    it('it', function(){const obj = require('../../src/es6/syntax.js');
        expect(deepFind(a, 'b.c.d')).to.deep.equal('abcd');
    })



});