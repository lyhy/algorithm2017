jest.dontMock('./valid-palindrome');

describe('valid-palindrome', function(){
    var func = require('./valid-palindrome');
    it('valid-palindrome', function(){
        var input = "A man, a plan, a canal: Panama";
        //var input = ".,";
        expect(func(input)).toEqual(true);

    });
});