jest.dontMock('./valid-parentheses');

describe('valid-parentheses', function(){
    var func = require('./valid-parentheses');
    it('valid-parentheses', function(){
        expect(func()).toEqual(true);

    });
});