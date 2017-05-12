jest.dontMock('./generate-parentheses');

describe('generate-parentheses', function(){
    var func = require('./generate-parentheses');
    it('generate-parentheses', function(){
        expect(func()).toEqual(true);

    });
});