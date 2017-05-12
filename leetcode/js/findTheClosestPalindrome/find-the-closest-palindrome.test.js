jest.dontMock('./find-the-closest-palindrome');

describe('find-the-closest-palindrome', function(){
    var func = require('./find-the-closest-palindrome');
    it('find-the-closest-palindrome', function(){
        expect(func()).toEqual(true);

    });
});