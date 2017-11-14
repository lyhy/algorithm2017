jest.dontMock('./longest-palindrome');

describe('longest-palindrome', function(){
    var func = require('./longest-palindrome');
    it('longest-palindrome', function(){
        var input = "abccccdd", output=7;
        expect(func(input)).toEqual(output);

    });
});