jest.dontMock('./palindrome-pairs');

describe('palindrome-pairs', function(){
    var func = require('./palindrome-pairs');
    it('palindrome-pairs', function(){
        expect(func()).toEqual(true);

    });
});