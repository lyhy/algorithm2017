jest.dontMock('./longest-palindrome');

describe('longest-palindrome', function(){
    var func = require('./longest-palindrome');
    it('longest-palindrome', function(){
        expect(func()).toEqual(true);

    });
});