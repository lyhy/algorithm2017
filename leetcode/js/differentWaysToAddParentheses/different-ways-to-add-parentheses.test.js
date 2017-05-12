jest.dontMock('./different-ways-to-add-parentheses');

describe('different-ways-to-add-parentheses', function(){
    var func = require('./different-ways-to-add-parentheses');
    it('different-ways-to-add-parentheses', function(){
        expect(func()).toEqual(true);

    });
});