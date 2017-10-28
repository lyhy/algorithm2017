jest.dontMock('./isomorphic-strings');

describe('isomorphic-strings', function(){
    var func = require('./isomorphic-strings');

    var a1 = 'egg', a2 = 'add';
    var b1 = 'foo', b2 = 'bar';
    var b11 = 'bar', b22 = 'foo';
    var c1 = 'paper', c2 = 'title';
    var d1 = 'ab', d2 = 'aa';
    var e1 = 'ab', e2 = 'ca';
    var f1 = 'a', f2 = 'a';
    it('isomorphic-strings', function(){
        expect(func(a1, a2)).toEqual(true);

    });
});