jest.dontMock('./valid-palindrome');

describe('valid-palindrome', function(){
    var func = require('./valid-palindrome');
    it('valid-palindrome', function(){
        expect(func()).toEqual(true);

    });
});