jest.dontMock('./palindrome-number');

describe('palindrome-number', function(){
    var func = require('./palindrome-number');
    it('palindrome-number', function(){
        expect(func()).toEqual(true);

    });
});