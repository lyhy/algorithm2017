jest.dontMock('./longest-valid-parentheses');

describe('longest-valid-parentheses', function(){
    var func = require('./longest-valid-parentheses');
    it('longest-valid-parentheses', function(){
        //var str = '(()', len = 2;
        var str = ')()())', len = 4;

        expect(func(str)).toEqual(len);

    });
});