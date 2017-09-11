jest.dontMock('./simplify-path');

describe('simplify-path', function(){
    var func = require('./simplify-path');
    it('simplify-path', function(){
        //var orig = '/home/', ret = '/home';
        var orig = '/a/./b/../../c/', ret = '/c';
        expect(func(orig)).toEqual(ret);

    });
});