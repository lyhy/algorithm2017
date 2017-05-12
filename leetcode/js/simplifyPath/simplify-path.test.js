jest.dontMock('./simplify-path');

describe('simplify-path', function(){
    var func = require('./simplify-path');
    it('simplify-path', function(){
        expect(func()).toEqual(true);

    });
});