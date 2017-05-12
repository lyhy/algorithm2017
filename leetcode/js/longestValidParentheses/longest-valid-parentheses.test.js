jest.dontMock('./longest-valid-parentheses');

describe('longest-valid-parentheses', function(){
    var func = require('./longest-valid-parentheses');
    it('longest-valid-parentheses', function(){
        expect(func()).toEqual(true);

    });
});